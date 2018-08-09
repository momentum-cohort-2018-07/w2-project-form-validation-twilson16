console.log('Add validation!');

// 1 Go through each field and evaluate if there is anything in the input field
// 2 If yes = done
// 3 If no - go back and enter 
// 4 


// call the fields and prevent default
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    // clearError()

    var name = document.getElementById('name').value.trim()
    // var carYear = document.getElementById('car-year').value.trim()
    // var carMake = document.getElementById('car-make').value.trim()
    // var carModel = document.getElementById('car-model').value.trim()
    // var startDate = document.getElementById('start-date').value.trim()
    // var days = document.getElementById('days').value.trim()
    // var creditCard = document.getElementById('credit-card').value.trim()
    // var cvv = document.getElementById('cvv').value.trim()
    // var expiration = document.getElementById('expiration').value.trim()

if (name === '') {
    showInvalidError()
} else { 
    // return alert ("Thank you for your reservation!")
    alert ("Error")
}
})

// function clearError() {
//     var field = document.querySelectorAll ('.input')
//     field.classList.remove('error')
//     var errorMsg = field.parentElement.querySelector('.error-msg')
//     if (errorMsg) {
//        errorMsg.remove() 
//     }
// }

function showInvalidError() {
    var errorDiv = document.createElement ('div')
    errorDiv.classList.add('input-invalid')
    errorDiv.innerText = 'Cannot be Blank'
    var field = document.getElementById('input-field')
    field.parentElement.appendChild(errorDiv)
    field.classList.add('error')}

