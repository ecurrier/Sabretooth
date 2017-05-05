function loginUser() {
    alert("Login User");
}

function attachHandlers() {
    $("#modalLoginButton").click(loginUser);
}

function onLoad() {
    attachHandlers();
}

$(document).ready(onLoad);