
// Creating a new h1 element for the container
let h1Element = document.createElement('h1');
h1Element.textContent = "AWS Technologies";

// Appending to existing container element and styles
let containerElement = document.getElementById('myContainer');
containerElement.appendChild(h1Element);

let btnElement = document.createElement('button');
btnElement.textContent = 'click me';
btnElement.onclick = function(){
    h1Element.textContent = "WEB TECHNOLOGIES";
    h1Element.classList.add("heading")
}
containerElement.appendChild(btnElement);

// remove styels to html elements
let removeStylebtnElement = document.createElement('button');
removeStylebtnElement.textContent = 'Remove styles';
removeStylebtnElement.onclick = function(){
    // h1Element.textContent = "AWS TECHNOLOGIES";
    h1Element.classList.remove("heading");
}
document.getElementById('myContainer').appendChild(removeStylebtnElement);


