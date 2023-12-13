// Creating an HTML element using JavaScript
let h1Element = document.createElement('h1');
h1Element.textContent = "Web Technologies";

// Appending to Document Body Object
document.body.appendChild(h1Element);


// Creating a new h1 element for the container
let newH1Element = document.createElement('h1');
newH1Element.textContent = "cloud Technologies";

// Appending to existing container element
let containerElement = document.getElementById('myContainer');
containerElement.appendChild(newH1Element);

//create new button elelment for container
let buttonElement = document.createElement('button');
buttonElement.textContent = 'Click me';
containerElement.appendChild(buttonElement);

//how to manipulate html heading based on user options adding styles also
buttonElement.onclick = function(){
    console.log("Onclick is Triggred");
    newH1Element.textContent = "4.0 Technologies";
    newH1Element.style.color = "blue";
    newH1Element.style.fontSize = "40px";
    newH1Element.style.fontFamily = "caveat";
    newH1Element.style.textDecoration = "underline";




}
