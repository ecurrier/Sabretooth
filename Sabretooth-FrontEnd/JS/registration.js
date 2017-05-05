function registerUser() {
    if(errorInName()) {
        return;
    }

    if(errorInEmail()) {
        return;
    }

    if(errorInPassword()) {
        return;
    }

    // Register the user
}

function errorInName() {
    var fullName = $("#nameField").val();

    if(fullName === "" || fullName == null){
        $("#nameError").text("Full Name is required.");
        return true;
    }

    $("#nameError").text(null);
    return false;
}

function errorInEmail() {
    var emailAddress = $("#emailField").val();

    var indexOfAt = emailAddress.indexOf('@'),
        indexOfDot = emailAddress.indexOf('.');

    if(indexOfAt === -1 || indexOfDot === -1 || indexOfAt > indexOfDot) {
        $("#emailError").text("Email Address is invalid.")
        return true;
    }

    $("#emailError").text(null)
    return false;
}

function errorInPassword() {
    var originalPassword = $("#originalPasswordField").val(),
        confirmPassword = $("#confirmPasswordField").val();

        if(originalPassword === "" || confirmPassword === ""){
            $("#passwordError").text("Both password fields are required.");
            return true;
        }

        if(!passwordMatching()) {
            return true;
        }

        $("#passwordError").text(null);
        return false;
}

function passwordMatching() {
    var originalPassword = $("#originalPasswordField").val(),
        confirmPassword = $("#confirmPasswordField").val();

    if(originalPassword === confirmPassword) {
        $("#passwordError").text(null);
        return true;
    }

    $("#passwordError").text("Passwords do not match.");
    return false;
}

function attachHandlers() {
    $("#modalLoginButton").click(registerUser);
    $("#confirmPasswordField").keyup(passwordMatching)
}

function onLoad() {
    attachHandlers();
}

$(document).ready(onLoad);