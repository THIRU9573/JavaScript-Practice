
let saveButton = document.getElementById('saveButton');
let textAeraElement = document.getElementById("meaasge");

saveButton.onclick = function (){
    let userEnteredText = textAeraElement.value;
    localStorage.setItem("userEnteredText", userEnteredText);

}

let storeUserInputValue = localStorage.getItem('userEnteredText');
if (storeUserInputValue === null){
    textAeraElement.value = "";
}
else {
    textAeraElement.value = storeUserInputValue;
}