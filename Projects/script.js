document.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("result");
  const displayElement = document.querySelector(".display");
  const buttons = document.querySelectorAll(".btn");
  let currentOperand = "0";
  let previousOperand = "";
  let operation = undefined;
  let shouldResetScreen = false;
  let history = []; // To store the last 3 operations
  let isParenthesisOpen = false;
  let memory = 0;

  // Update the display
  function updateDisplay() {
      if (!displayElement) return;
      displayElement.innerHTML = `
          <div class="history">
              ${history.map((item) => `<div class="history-item">${item}</div>`).join("")}
          </div>
          <div class="current-operation">
              ${previousOperand} ${operation ? operationSymbol(operation) : ""} ${currentOperand}
          </div>
      `;
  }

  // Clear all values
  function clear() {
      currentOperand = "0";
      previousOperand = "";
      operation = undefined;
      shouldResetScreen = false;
      history = []; // Clear history
      updateDisplay();
  }

  // Delete the last digit
  function deleteDigit() {
      if (currentOperand === "0" || shouldResetScreen) return;
      if (currentOperand.length === 1) {
          currentOperand = "0";
      } else {
          currentOperand = currentOperand.slice(0, -1);
      }
      updateDisplay();
  }

  // Append a number to the current operand
  function appendNumber(number) {
      if (shouldResetScreen) {
          currentOperand = "";
          shouldResetScreen = false;
      }

      if (currentOperand === "0" && number !== ".") {
          currentOperand = number;
      } else {
          if (number === "." && currentOperand.includes(".")) return;
          currentOperand += number;
      }
      updateDisplay();
  }

  // Handle operations
  function chooseOperation(op) {
      if (currentOperand === "") return;

      if (previousOperand !== "") {
          calculate();
      }

      operation = op;
      previousOperand = currentOperand;
      currentOperand = "";
      updateDisplay();
  }

  // Calculate the result
  function calculate() {
      if (!previousOperand || !currentOperand || !operation) return;

      let computation;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);

      if (isNaN(prev) || isNaN(current)) {
          currentOperand = "Error";
          return;
      }

      try {
          switch (operation) {
              case "add":
                  computation = prev + current;
                  break;
              case "subtract":
                  computation = prev - current;
                  break;
              case "multiply":
                  computation = prev * current;
                  break;
              case "divide":
                  if (current === 0) throw new Error("Division by zero");
                  computation = prev / current;
                  break;
              default:
                  return;
          }

          // Add the operation to history with proper formatting
          const historyEntry = `${prev} ${operationSymbol(operation)} ${current} = ${computation}`;
          history.unshift(historyEntry);
          if (history.length > 3) history.pop();

          currentOperand = computation.toString();
          operation = undefined;
          previousOperand = "";
          shouldResetScreen = true;
      } catch (e) {
          currentOperand = "Error";
      }
      updateDisplay();
  }

  // Handle special functions
  function handleSpecialFunction(action) {
      const num = parseFloat(currentOperand);

      switch (action) {
        case "percent":
            if (previousOperand && operation) {
                const prevNum = parseFloat(previousOperand);
                switch (operation) {
                    case "add":
                    case "subtract":
                        // For addition/subtraction: calculate percentage of first number
                        currentOperand = ((prevNum * num) / 100).toString();
                        break;
                    case "multiply":
                    case "divide":
                        // For multiplication/division: just convert to decimal
                        currentOperand = (num / 100).toString();
                        break;
                }
                // Add to history
                history.unshift(`${num}% of ${prevNum} = ${currentOperand}`);
            } else {
                // Simple percentage when no operation is pending
                currentOperand = (num / 100).toString();
                history.unshift(`${num}% = ${currentOperand}`);
            }
            break;
          case "square":
              currentOperand = (num * num).toString();
              history.unshift(`sqr(${num}) = ${currentOperand}`);
              break;
          case "sqrt":
              if (num < 0) {
                  currentOperand = "Error";
              } else {
                  currentOperand = Math.sqrt(num).toString();
                  history.unshift(`√${num} = ${currentOperand}`);
              }
              break;
          case "parenthesis":
              handleParenthesis();
              break;
          default:
              break;
      }
      if (history.length > 3) history.pop();
      updateDisplay();
  }

  // New function to handle parentheses
  function handleParenthesis() {
      if (!isParenthesisOpen) {
          if (currentOperand === "0") {
              currentOperand = "(";
          } else {
              currentOperand += "(";
          }
          isParenthesisOpen = true;
      } else {
          currentOperand += ")";
          isParenthesisOpen = false;
          // Evaluate expression inside parentheses
          try {
              const result = evaluateExpression(currentOperand);
              currentOperand = result.toString();
          } catch (e) {
              currentOperand = "Error";
          }
      }
  }

  // New function to evaluate expressions
  function evaluateExpression(expr) {
      // Remove outer parentheses
      expr = expr.replace(/^\((.*)\)$/, "$1");
      // Basic evaluation - Note: In production, use a proper parser
      return Function('"use strict";return (' + expr + ')')();
  }

  // Map operation names to symbols
  function operationSymbol(op) {
      switch (op) {
          case "add":
              return "+";
          case "subtract":
              return "-";
          case "multiply":
              return "×";
          case "divide":
              return "÷";
          default:
              return "";
      }
  }

  // Add click event listeners to all buttons
  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          const action = button.dataset.action;
          const value = button.dataset.value;

          if (value) {
              appendNumber(value);
          } else if (action) {
              switch (action) {
                  case "clear":
                      clear();
                      break;
                  case "backspace":
                      deleteDigit();
                      break;
                  case "decimal":
                      appendNumber(".");
                      break;
                  case "add":
                  case "subtract":
                  case "multiply":
                  case "divide":
                      chooseOperation(action);
                      break;
                  case "calculate":
                      calculate();
                      break;
                  case "percent":
                  case "square":
                  case "sqrt":
                  case "parenthesis":
                      handleSpecialFunction(action);
                      break;
                  default:
                      break;
              }
          }
      });
  });

  // Handle keyboard input
  document.addEventListener("keydown", (event) => {
      event.preventDefault();
      const key = event.key;

      // Number keys (including numpad)
      if (!isNaN(key) || key === "0") {
          appendNumber(key);
      }
      // Operator keys
      else switch (key) {
          case ".":
          case "NumpadDecimal":
              appendNumber(".");
              break;
          case "Backspace":
          case "Delete":
              deleteDigit();
              break;
          case "Enter":
          case "=":
              calculate();
              break;
          case "+":
              chooseOperation("add");
              break;
          case "-":
              chooseOperation("subtract");
              break;
          case "*":
              chooseOperation("multiply");
              break;
          case "/":
              chooseOperation("divide");
              break;
          case "%":
              handleSpecialFunction("percent");
              break;
          case "c":
          case "C":
          case "Escape":
              clear();
              break;
          case "(":
          case ")":
              handleSpecialFunction("parenthesis");
              break;
          case "s":
          case "S":
              handleSpecialFunction("square");
              break;
          case "r":
          case "R":
              handleSpecialFunction("sqrt");
              break;
      }
      updateDisplay();
  });

  // Initialize display
  updateDisplay();
});