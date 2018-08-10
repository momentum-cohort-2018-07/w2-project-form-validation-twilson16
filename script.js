console.log('Add validation!');

// 1 Go through each field and evaluate if there is anything in the input field
// 2 If yes = done
// 3 If no - go back and enter 
// 4 


// call the fields and prevent default
document.getElementById('parking-form').addEventListener('submit', function () {
    event.preventDefault()
    // clearError()

    var inputElements = document.getElementsByTagName('input')
    var carField = document.getElementById('car-field')
    var errorDiv = document.createElement ('div')
    for (var el of inputElements) {
    if (document.getElementById('car-year').value.trim() === '' || document.getElementById('car-make').value.trim() === '' || document.getElementById('car-model').value.trim() === '') {
        carField.classList.add('input-invalid')  
    }
    if (el.value.trim() === '') {
        el.parentElement.classList.add('input-invalid') 

        errorDiv.innerText = 'Cannot be blank'


    // } else if (inputCar.value.trim() === '') {
    //     el.parentElement.classList.add('input-invalid') 
    //     errorDiv.classList.add('errorDiv')
    //     errorDiv.innerText = 'Cannot be blank'
    } else {
        el.parentElement.classList.add('input-valid')
        carField.classList.add('input-valid')
}
//     var name = document.getElementById('name').value.trim()
// if (name === '') {
//      showInvalidName()
// } else { 
//     alert ("Thank you for your reservation!")
    }
})

// function clearError() {
//     var field = document.querySelectorAll ('.input')
//     // field.classList.remove("errorDiv")
//     var errorMsg = field.parentElement.getElementByClassName('errorDiv')
//     if (errorMsg) {
//        errorMsg.remove() 
//     }
// }

// function showInvalid() {
//     var errorDiv = document.createElement ('div')
//     errorDiv.classList.add('errorDiv')
//     errorDiv.innerText = 'Cannot be blank'
//     var fieldName = document.getElementById('name-field')
//     fieldName.appendChild(errorDiv)
//     fieldName.classList.add('input-invalid')}

// function showInvalidCar() {
//     var errorDiv = document.createElement ('div')
//     errorDiv.classList.add('input-invalid')
//     errorDiv.innerText = 'Cannot be blank'
//     var fieldCar = document.getElementByClassName('input-group')
//     fieldCar.appendParent(errorDiv)
//     fieldCar.classList.add('input-invalid')}

// document.getElementById('parking-form').addEventListener('submit', function () {
//     event.preventDefault()
    
//         clearError()
    
//  var startDate = document.getElementById('start-date').value.trim()
//     if (startDate === '') {
//          showInvalidStart()
//     } 
//     // else { 
//     //     alert ("Thank you for your reservation!")
//     //     }
//     })

// function showInvalidStart() {
//     var errorDiv = document.createElement ('div')
//     errorDiv.classList.add('errorDiv')
//     errorDiv.innerText = 'Cannot be blank'
//     var field = document.getElementById('start-date-field')
//     field.appendChild(errorDiv)
//     field.classList.add('input-invalid')}



