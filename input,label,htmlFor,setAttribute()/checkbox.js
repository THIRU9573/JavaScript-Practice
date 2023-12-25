//input Creation:
let inputElement = document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = "myCheckbox";
document.body.appendChild(inputElement);

//Label Creation:
let labelElement = document.createElement('label');
// labelElement.htmlFor = "myCheckbox"; //method1
labelElement.setAttribute("for", "myCheckbox"); //method2 using setAttribute(attribute, value)
labelElement.textContent = "Graduated";
document.body.appendChild(labelElement);
