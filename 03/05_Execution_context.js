//----Execution Contexts and the Execution Stack
/* 
execution context is an abstract concept of an environment where the JavaScript code is evaluated and executed.
The JavaScript engine creates an execution context for every function invocation.
The execution context has two phases: the creation phase and the execution phase.
The creation phase is where the JavaScript engine sets up the environment for the execution of the code.
The execution phase is where the JavaScript engine executes the code.
The JavaScript engine creates a global execution context for the global scope.
The JavaScript engine creates a function execution context for every function invocation.

*/
//----The Execution Stack
/*
The JavaScript engine maintains an execution stack to manage the execution contexts.
The execution stack is also known as the call stack.
The JavaScript engine pushes an execution context onto the stack when a function is invoked.
The JavaScript engine pops an execution context from the stack when the function finishes executing.
The JavaScript engine executes the code in the current execution context.
The JavaScript engine moves to the next execution context when the current execution context finishes executing.
The JavaScript engine finishes executing when the execution stack is empty.
*/
//----The Global Execution Context
/*
The JavaScript engine creates a global execution context for the global scope.
The global execution context is the default execution context.
The JavaScript engine pushes the global execution context onto the execution stack when the script is executed.
The JavaScript engine pops the global execution context from the execution stack when the script finishes executing.
The JavaScript engine executes the code in the global execution context.
*/
//----The Function Execution Context
/*
The JavaScript engine creates a function execution context for every function invocation.
The function execution context is pushed onto the execution stack when the function is invoked.
The function execution context is popped from the execution stack when the function finishes executing.
The JavaScript engine executes the code in the function execution context.
*/
//----The Execution Context Lifecycle
/*
The JavaScript engine creates an execution context for every function invocation.
The JavaScript engine pushes the execution context onto the execution stack when the function is invoked.
The JavaScript engine executes the code in the execution context.
The JavaScript engine pops the execution context from the execution stack when the function finishes executing.
The JavaScript engine moves to the next execution context in the stack.
The JavaScript engine finishes executing when the execution stack is empty.
*/
//----The Scope Chain
/*
The scope chain is a list of variables that the JavaScript engine can access.
The scope chain is created when the execution context is created.
The scope chain is used to resolve variable names.
The JavaScript engine searches the scope chain from the current execution context to the global execution context.
The JavaScript engine stops searching when it finds the variable.
The JavaScript engine throws a ReferenceError if the variable is not found in the scope chain.
*/
//----The Lexical Environment
/*
The lexical environment is a data structure that holds the variables and their values.
The lexical environment is created when the execution context is created.
The lexical environment is used to store the variables and their values.
The JavaScript engine creates a new lexical environment for every function invocation.
The JavaScript engine uses the lexical environment to resolve variable names.
The JavaScript engine creates a new lexical environment for every block scope.
*/
//----The Variable Environment
/*
The variable environment is a data structure that holds the variables and their values.
The variable environment is created when the execution context is created.
The variable environment is used to store the variables and their values.
The JavaScript engine creates a new variable environment for every function invocation.
The JavaScript engine uses the variable environment to resolve variable names.
The JavaScript engine creates a new variable environment for every block scope.
*/