const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var attempt=3;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "dipankar" && password === "dipankar"||username === "homie" && password === "4050") {
        alert("You have successfully logged in.");
        window.location ="home.html";
        return false;
    } else {
        attempt--;
        alert("you have left" +attempt+ " attempt");
        loginErrorMsg.style.opacity = 5;
        if(attempt==0){
        
        document.getElementById("username-field").disabled=true;
        document.getElementById("password-field").disabled=true;
        document.getElementById("login-form-submit").disabled=true;  
    return false;      }
    }
})
