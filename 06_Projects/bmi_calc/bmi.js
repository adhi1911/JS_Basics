const form = document.querySelector('form')
// if we set values here it will be null
// const height = parseInt(form.height.value)
// const weight = parseInt(form.weight.value)
// console.log(height, weight) //(NaN, NaN)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const form = document.querySelector('form')
    const height = parseInt(form.height.value)
    const weight = parseInt(form.weight.value)
    const results = document.querySelector('#results')
    // console.log(height, weight)
    if(height === '' || height <= 0 || isNaN(height) ){
        results.innerHTML = "Please enter valid height"
    } else if(weight === '' || weight <= 0 || isNaN(weight) ){
        results.innerHTML = "Please enter valid weight"
    } else {const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span> Your BMI is ${bmi} <span> `
    let message = document.createElement('p')
    results.appendChild(message)
    if(bmi < 18.5){
        message.textContent = "You are underweight"
    } else if(bmi < 24.9){
        message.textContent = "You have normal weight"
    } else if(bmi < 29.9){
        message.textContent = "You are overweight"
    } else {
        message.textContent = "You are obese"
    }
}
});



