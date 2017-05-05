(function (global) {
    "use strict";
    global.Sabretooth = global.Sabretooth || {};
    global.Sabretooth.Forms = global.Sabretooth.Forms || {};

    global.Sabretooth.Forms.main = (function () {
        var currentForm,
            loginTab,
            registerTab,
            loginForm,
            registerForm;

        function loginUser() {
            alert("Login User");
        }

        function switchForm() {
            if(currentForm === "login"){
                registerForm.delay(150).fadeIn(150);
                loginForm.fadeOut(150);
                clearInputFields(loginForm);

                loginTab.removeClass("selectorActive");
                registerTab.addClass("selectorActive");
                currentForm = "register";
            }
            else {
                loginForm.delay(150).fadeIn(150);
                registerForm.fadeOut(150);
                clearInputFields(registerForm);

                registerTab.removeClass("selectorActive");
                loginTab.addClass("selectorActive");
                currentForm = "login";
            }
        }

        function clearInputFields(form) {
            var formId  = form.attr('id');
            $("#" + formId + " input").each(function(index) {
                $(this).val("");
                $(this).removeClass('error');
                $(this).removeClass('warning');
            });

            $("#modalErrors").fadeOut(150);
        }

        function attachHandlers() {
            $("#modalLoginButton").click(loginUser);
            $("#selectorLogin").click(switchForm);
            $("#selectorRegister").click(switchForm);
            $("#modalLoginPassword").keyup(function(event) {
                if(event.which === 13){
                    loginUser();
                }
            });
        }

        function initializeVariables() {
            currentForm = "login";

            // Cache Selectors
            loginTab = $("#selectorLogin");
            loginForm = $("#modalLoginForm");
            registerTab = $("#selectorRegister");
            registerForm = $("#modalRegisterForm");
        }

        function onLoad() {
            initializeVariables();
            attachHandlers();
        }

        return {
            onLoad: onLoad
        };
    }());
}(this));

$(document).ready(Sabretooth.Forms.main.onLoad);