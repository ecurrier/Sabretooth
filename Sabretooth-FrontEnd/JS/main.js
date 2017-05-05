var currentForm;
var loginTab;
var registerTab;
var loginForm;
var registerForm;

function loginUser() {
    //alert("Login User");
}

function switchForm() {
    if(currentForm === "login"){
        registerForm.delay(150).fadeIn(150);
 		loginForm.fadeOut(150);

        loginTab.removeClass("selectorActive");
        registerTab.addClass("selectorActive");
        currentForm = "register";
    }
    else {
        loginForm.delay(150).fadeIn(150);
 		registerForm.fadeOut(150);

        registerTab.removeClass("selectorActive");
        loginTab.addClass("selectorActive");

        currentForm = "login";
    }
}

function attachHandlers() {
    $("#modalLoginButton").click(loginUser);
    $("#selectorLogin").click(switchForm);
    $("#selectorRegister").click(switchForm);
}

function initializeVariables() {
    currentForm = "login";

    loginTab = $("#selectorLogin");
    loginForm = $("#modalLoginForm");

    registerTab = $("#selectorRegister");
    registerForm = $("#modalRegisterForm");
}

function onLoad() {
    initializeVariables();
    attachHandlers();
}

$(document).ready(onLoad);