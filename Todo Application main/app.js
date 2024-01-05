
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveButton = document.getElementById("saveButton");

function getTodoListFromLocalStorage () {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null){
        return [];
    }
    else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todoCount = todoList.length;



saveButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList))
}




function onTodoStatusChange(checkboxId, labelId, todoId){
  let checkboxElement = document.getElementById(checkboxId);
  console.log(checkboxElement.checked);

  let labelElmenent = document.getElementById(labelId);
  
  labelElmenent.classList.toggle('checked'); 

  let todoObjectIndex = todoList.findIndex(function (eachTodo){
  let eachTodoId = "todo" +eachTodo.uniqueNo;

  if (eachTodoId === todoId){
      return true;
  }
  else {
      return false;
  }
  });

  let todoObject = todoList[todoObjectIndex];
  if (todoObject === true){
  todoObject.isChecked = false;
  }
  else{
  todoObject.isChecked = true;
  }


}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);

    //getting Todo item index
    let deleteElementIndex = todoList.findIndex(function (eachTodo){
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        }
        else {
            return false;
        }
    });
    todoList.splice(deleteElementIndex,1);
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
    inputElement.id = checkboxId;
    inputElement.checked = todo.isChecked;
    inputElement.classList.add('checkbox-input');

    inputElement.onclick = function () {
        onTodoStatusChange(checkboxId, labelId, todoId);
    }
    todoElement.appendChild(inputElement);

    //Creating Label Container
    let labelContainer = document.createElement('div');
    labelContainer.classList.add('label-container', 'd-flex', 'flex-row');

    todoElement.appendChild(labelContainer);

    //Creating Label Element
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add('checkbox-label');
    labelElement.textContent = todo.text;
    if (todo.isChecked === true){
        labelElement.classList.add("checked");
    }

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
        uniqueNo: todoCount,
        isChecked: false
    };

    todoList.push(newTodo);

    creatingAndAppendTodo(newTodo);
    userInputElement.value = "";


}

addTodoButton.onclick = function() {
    onAddTodo();
}


for (let eachTodo of todoList){
    creatingAndAppendTodo(eachTodo);
}


