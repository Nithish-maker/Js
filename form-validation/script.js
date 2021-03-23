//Selecting each and every required input selctor of any of the DOM selction method */
const usernameEl = document.querySelector('#username');                 /* document.getElementById('username'); */
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

//username validation
const checkUsername = () => {
    // for returning a useful boolean value to validate the input event 
    let valid = false;
    //proper validation by defining the boundaries 
    const min = 3,
        max = 25;
    //value of the username parameter
    const username = usernameEl.value.trim();

    if (isRequired(username)) {
        showError(usernameEl, "Username cannot be blank.");             //function call to showerror
    } else if (isBetween(username.length, min, max)) {
        showError(usernameEl, "Username must be between ${min} and ${max} characters.")
    } else {
        showSuccess(usernameEl);    
        valid = true;
    }
    return valid;
};

//email validation with defined utility functions
const checkEmail = () => {
    let valid = false;
    //value of email input type
    const email = emailEl.value.trim();
    if (isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};
//password validation
const checkPassword = () => {
    let valid = false;

    //password input type value from globally declared query selector variable values
    const password = passwordEl.value.trim();

    if (isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};
//confirm password validation
const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

//utility fuction with a R.E to check upon the email pattern 
const isEmailValid = (email) => {
    //pattern definition for mail 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
//password check function
const isPasswordSecure = (password) => {
    //password pattern definition
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
//checking for the occurences of a blank character
const isRequired = value => value === '' ? true : false;
//checks for defined boundaries
const isBetween = (length, min, max) => length > min || length < max ? true : false;

//error display function
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};
//success error message function
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message with an empty screen
    const error = formField.querySelector('small');
    error.textContent = '';
}

//form submission trigerring evet listener 
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        alert("SUCCESFULLY SUBMITTED ");
    }
});
