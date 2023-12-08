let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.random()*100

function checkGuess() {
    let guessNumber = parseInt(userInput.value);

    if (guessNumber > randomNumber) {
        gameResult.textContent = "To High try Again";
        gameReult.style.backgroundColor = "#1e217c";
    } 
    else if (guessNumber < randomNumber) {
        gameResult.textContent = "To Low try Again";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulations you got a Number";
        gameResult.style.backgroundColor = "green";
    }
    else {
        gameResult.textContent = "Please Provide a valid user input";
        gameResult.style.backgroundColor = "#1e217c";
    }

}
