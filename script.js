/*******w***********

    Project 3
    Name: Calvin Anglo
    Date: April 22, 2020
    Description: Project 3 Javascript

*******************/

document.addEventListener("DOMContentLoaded", load);

function load() {
    document.getElementById("contactForm").addEventListener("submit", validate);
    document.getElementById("reset"), addEventListener("reset", resetForm);
}

function validate(e) {

    hideAllErrors();

    if (formHasErrors()) {
        e.preventDefault();
        return false;
    }

    return true;
}

function formHasErrors() {

    let errorFlag = false;

    let requiredFields = ["name", "phone", "email"];

    for (let i = 0; i < requiredFields.length; i++) {
        let textField = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(textField)) {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";

            if (!errorFlag) {
                textField.focus();
                textField.select();
            }

            errorFlag = true;
        }
    }

    let nameRegEx = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
    let name = document.getElementById("name").value;

    if (!nameRegEx.test(name)) {
        document.getElementById("name_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("name").focus();
            document.getElementById("name").select();
        }

        errorFlag = true;
    }

    let phoneRegEx = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/);
    let phone = document.getElementById("phone").value;

    if (!phoneRegEx.test(phone)) {
        document.getElementById("phone_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }

        errorFlag = true;
    }

    let emailRegEx = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    let email = document.getElementById("email").value;

    if (!emailRegEx.test(email)) {
        document.getElementById("email_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }

        errorFlag = true;
    }


    return errorFlag;
}

function resetForm(e) {
    hideAllErrors();
    document.getElementById("name").focus();
}

function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}

function formFieldHasInput(fieldElement) {
    if (fieldElement.value == null || trim(fieldElement.value) == "") {
        return false
    }

    return true;
}

function hideAllErrors() {
    var errorFields = document.getElementsByClassName("error");

    for (var i = 0; i < errorFields.length; i++) {
        errorFields[i].style.display = "none";
    }
}