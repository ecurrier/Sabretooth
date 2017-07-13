(function (global) {
    "use strict";
    global.Sabretooth = global.Sabretooth || {};
    global.Sabretooth.Forms = global.Sabretooth.Forms || {};

    global.Sabretooth.Forms.registration = (function () {
        var modalErrors,
            modalErrorIcon,
            modalErrorMessage,
            nameField,
            emailField;

        function registerUser() {
            if(errorInEmail()) {
                return;
            }

            if(errorInPassword()) {
                return;
            }

            // Register the user
            alert("Form is valid!");
        }

        function errorInEmail() {
            var emailAddress = $("#emailField").val();

            var indexOfAt = emailAddress.indexOf('@'),
                indexOfDot = emailAddress.indexOf('.');

            if(indexOfAt === -1 || indexOfDot === -1 || indexOfAt > indexOfDot) {
                toggleError("Email Address is invalid.", emailField);
                return true;
            }

            toggleErrorModal(emailField);
            return false;
        }

        function errorInPassword() {
            var originalPassword = $("#originalPasswordField").val(),
                confirmPassword = $("#confirmPasswordField").val();

                if(originalPassword === "" || confirmPassword === ""){
                    toggleError("Both password fields are required.", $("#originalPasswordField"));
                    return true;
                }

                if(!passwordMatching()) {
                    return true;
                }

                toggleErrorModal($("#originalPasswordField"));
                return false;
        }

        function passwordMatching() {
            var originalPassword = $("#originalPasswordField").val(),
                confirmPassword = $("#confirmPasswordField").val();

            if(originalPassword === confirmPassword) {
                toggleErrorModal($("#confirmPasswordField"));
                return true;
            }

            toggleError("Passwords do not match.", $("#confirmPasswordField"));
            return false;
        }

        function toggleErrorModal(field) {
            modalErrors.fadeOut(150);
            field.removeClass("error");
            field.removeClass("warning");
        }

        function toggleError(message, field) {
            modalErrors.removeClass("warning");
            modalErrors.addClass("error");
            modalErrorIcon.removeClass("glyphicon-question-sign");
            modalErrorIcon.addClass("glyphicon-exclamation-sign");
            modalErrorMessage.text(message);
            modalErrors.delay(150).fadeIn(150, function() {
                field.removeClass("warning");
                field.addClass("error");
            });
        }

        function toggleWarning(message, field) {
            modalErrors.removeClass("error");
            modalErrors.addClass("warning");
            modalErrorIcon.removeClass("glyphicon-exclamation-sign");
            modalErrorIcon.addClass("glyphicon-question-sign");
            modalErrorMessage.text(message);
            modalErrors.delay(150).fadeIn(150, function() {
                field.removeClass("error");
                field.addClass("warning");
            });
        }

        function attachHandlers() {
            $("#modalRegisterButton").click(registerUser);
            $("#confirmPasswordField").keyup(passwordMatching);
        }

        function initializeVariables() {
            // Cache Selectors
            modalErrors = $("#modalErrors");
            modalErrorIcon = $("#errorIcon");
            modalErrorMessage = $("#errorMessage");
            nameField = $("#nameField");
            emailField = $("#emailField");
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

$(document).ready(Sabretooth.Forms.registration.onLoad);