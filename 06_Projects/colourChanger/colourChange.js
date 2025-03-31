const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(eventObj){
        // Extract the computed background color from the clicked button
        const buttonColor = window.getComputedStyle(eventObj.target).backgroundColor;
        console.log(`Changing background to: ${buttonColor}`);
        
        // Apply this color to the body
        body.style.background = buttonColor;
    })
});

