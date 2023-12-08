let inputElement = document.getElementById("inputText");
let signInElement = document.getElementById("signInText");

function signIn(){
    let inputValue = inputElement.value;
    let verifyingText = "Hi " + inputValue + ", verifying your account ....";
    signInElement.textContent = verifyingText;
}