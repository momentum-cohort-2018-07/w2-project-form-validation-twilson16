console.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function () {
    event.preventDefault()

    clearError()

    var inputElements = document.getElementsByTagName('input')
    var carField = document.getElementById('car-field')
    // var elparentElement = document.getElementsByClassName('input-field')
    for (var el of inputElements) {
        if (el.value.trim() === '') {
            el.parentElement.classList.add('input-invalid')
            el.parentElement.classList.remove('input-valid')
            showInvalid(el.parentElement)
        } else {
            el.parentElement.classList.add('input-valid')
            el.parentElement.classList.remove('input-invalid')
        }

    }
    if (document.getElementById('car-year').value.trim() === '' || document.getElementById('car-make').value.trim() === '' || document.getElementById('car-model').value.trim() === '') {
        carField.classList.add('input-invalid') 
        carField.classList.remove('input-valid') 
        
    } else {
        carField.classList.add('input-valid')
        carField.classList.remove('input-invalid')
}

})

function clearError() {
    var errorMsgs = document.querySelectorAll('.errorDiv')
    for (var errorMsg of errorMsgs) {
        errorMsg.remove()
    }
}

function showInvalid(el) {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('errorDiv')
    errorDiv.innerText = 'Cannot be blank'
    el.appendChild(errorDiv)
}


//Attempts to develop function for car field: 

// function invalidCarField(elparentElement) {
//     var carYear = document.getElementById('car-year')
//     var carMake = document.getElementById('car-make')
//     var carModel = document.getElementById('car-model')
//     var elparentElement = document.getElementsByClassName('input-field')
//    if (carYear.value.trim() === '' ||
//         carMake.value.trim() ==='' ||
//         carModel.value.trim() === '') {
//             elparentElement.classList.add('input-invalid')
//             elparentElement.classList.remove('input-valid')
//         }

// }

// function carParent(el) {
//     var carField = document.getElementById('car-field')
//     for (var el of elements) {
//         showInvalid
//     }
    
// }