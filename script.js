console.log('Add validation!');

// 1 Go through each field and evaluate if there is anything in the input field
// 2 If yes = done
// 3 If no - go back and enter 
// 4 


// call the fields and prevent default
document.getElementById('parking-form').addEventListener('submit', function () {
    event.preventDefault()

    clearError()

    var inputElements = document.getElementsByTagName('input')
    var carField = document.getElementById('car-field')
    var elparentElement = document.getElementsByTagName('input')
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
    } else {
        carField.classList.add('input-valid')
    }

})

// el parent element varianle, if has input group - look at parent

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