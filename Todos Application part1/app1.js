
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveButton = document.getElementById("saveButton");

let todoList = [
    {
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    },
    {
        text: "Learn ReactJs",
        uniqueNo: 4
    },
    {
        text: "Learn NodeJs",
        uniqueNo: 5
    }

];

saveButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList))
}


let todoCount = todoList.length;


function onTodoStatusChange(checkboxId, labelId){
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElmenent = document.getElementById(labelId);
    /* method 1:
    if (checkboxElement.checked === true) {
        labelElmenent.classList.add('checked');
    }
    else {
        labelElmenent.classList.remove('checked');
    }
    */
   //method 2:
   labelElmenent.classList.toggle('checked'); 


}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}



function creatingAndAppendTodo(todo){
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    //Creating li element
    let todoElement = document.createElement('li')
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);
    console.log(todoItemsContainer);

    //Creating checkbox 
    let inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    //inputElement.id = 'checkboxInput';
    inputElement.id = checkboxId;
    inputElement.classList.add('checkbox-input');
    inputElement.onclick = function () {
        onTodoStatusChange(checkboxId, labelId);
    }
    todoElement.appendChild(inputElement);

    //Creating Label Container
    let labelContainer = document.createElement('div');
    labelContainer.classList.add('label-container', 'd-flex', 'flex-row');

    todoElement.appendChild(labelContainer);

    //Creating Label Element
    let labelElement = document.createElement('label');
    //labelElement.setAttribute('for', 'checkboxInput');
    labelElement.setAttribute('for', checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add('checkbox-label');
    labelElement.textContent = todo.text;

    labelContainer.appendChild(labelElement);

    //creating Delete Icon Conatiner
    let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add('delete-icon-container');

    labelContainer.appendChild(deleteIconContainer);

    //Adding Icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add('fa-regular', 'fa-trash-can', 'delete-icon');
    deleteIcon.onclick = function (){
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);


}

function onAddTodo(){

    let userInputElement = document.getElementById('todoUserInput');
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }


    todoCount = todoCount + 1;

    let newTodo  = {
        text: userInputValue,
        uniqueNo: todoCount
    };

    creatingAndAppendTodo(newTodo);
    userInputElement.value = "";


}

addTodoButton.onclick = function() {
    onAddTodo();
}



/*
//method 1:
creatingAndAppendTodo(todoList[0]);
creatingAndAppendTodo(todoList[1]);
creatingAndAppendTodo(todoList[2]);
*/
// if you have array like todoList means no.of values is there every time call function like createAndAppendTodo(todoList(0)) very complex work so to resolve this we have to use another method like Loops concept.

//method 2: Using for.....of Loop method:
for (let eachTodo of todoList){
    creatingAndAppendTodo(eachTodo);
}


/*  
practice session:
    //Creating li element
    let todoElement = document.createElement('li')
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    console.log(todoItemsContainer);

    //Creating checkbox
    let inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = 'checkboxInput';
    inputElement.classList.add('checkbox-input');

    todoElement.appendChild(inputElement);

    //Creating Label Container
    let labelContainer = document.createElement('div');
    labelContainer.classList.add('label-container', 'd-flex', 'flex-row');

    todoElement.appendChild(labelContainer);

    //Creating Label Element
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'checkboxInput');
    labelElement.classList.add('checkbox-label');
    labelElement.textContent = "Practice JavaScript";

    labelContainer.appendChild(labelElement);

    //creating Delete Icon Conatiner
    let deleteIconContainer = document.createElement('div');
    deleteIconContainer.classList.add('delete-icon-container');

    labelContainer.appendChild(deleteIconContainer);

    //Adding Icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add('fa-regular', 'fa-trash-can', 'delete-icon');

    deleteIconContainer.appendChild(deleteIcon);

*/

