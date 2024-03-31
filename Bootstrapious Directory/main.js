const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');
const email = document.querySelector('#email');

const form = document.querySelector('form');
const toast = document.querySelector('.toast');

form.addEventListener('submit', function (e) {

    ClearErrorMessages();

    if (!checkEmail() && !checkPassword()) {
        e.preventDefault();
        createErrorMessage(email, "Invalid Email Address!");
        createErrorMessage(password, "Password must contain at least one number and match the confirm password!");
    }
    else if (!checkEmail()) {
        e.preventDefault();
        createErrorMessage(email, "Invalid Email Address!");
    } else if (!checkPassword()) {
        e.preventDefault();
        createErrorMessage(password, "Password must contain at least one number and match the confirm password!");

    }
    else {
        e.preventDefault();
        showToast();
        setTimeout(hideToast, 5000);                         
    }
});


function checkPassword() {
    if (password.value != confirmPassword.value) {
        return false;
    }
    var regex = /\d/;
    if (!regex.test(password.value)) {
        return false;
    }
    return true;
}


function checkEmail() {
    const regex2 = /@/;
    return regex2.test(email.value);
}

function createErrorMessage(inputElement, message) {
    let errorSpan = inputElement.nextElementSibling;

    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.textContent = message;
    } else {
        errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        inputElement.parentElement.appendChild(errorSpan);
        errorSpan.textContent = message;
    }
}

function ClearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((elem) => {
        elem.remove();
    })
}

function showToast() {
    toast.textContent = 'Submitted Successfully!';
    toast.classList.add('show');
  }

  function hideToast() {
    toast.classList.remove('show');
  }