


//background container creation
let bgContainerElement = document.createElement('div');
bgContainerElement.classList.add('background-container');
document.body.appendChild(bgContainerElement);

//heading creation
let headingElement = document.createElement('h1');
headingElement.classList.add('heading');
headingElement.textContent = 'Book List';
bgContainerElement.appendChild(headingElement);

//ul list container creation
let unorderListElement = document.createElement('ul');
unorderListElement.classList.add('list-container');
bgContainerElement.appendChild(unorderListElement);

let BookItems = ['Rich Dad Poor Dad', 'You can Achieve More', 'Wings of Fire', 'Believe in Yourself', 'the Psychology of Money']

//list creation
for (let bookLists of BookItems){
    let listElement = document.createElement('li');
    listElement.textContent = bookLists;
    unorderListElement.appendChild(listElement);  
}

//checkbox creation:
let checkboxElement = document.createElement("input");
checkboxElement.type = 'checkbox';
checkboxElement.id = 'deliveryItem';
bgContainerElement.appendChild(checkboxElement);

//label creation
let labelEliment = document.createElement('label');
labelEliment.classList.add('delivery-text');
labelEliment.textContent = 'Need Home Delivery';
labelEliment.setAttribute('for', 'deliveryItem');
bgContainerElement.appendChild(labelEliment);

//break eliment creation
let breakEliment = document.createElement('br');
bgContainerElement.appendChild(breakEliment);

//button creation
let btnElement = document.createElement('button')
btnElement.classList.add('btn', 'btn-primary')
btnElement.textContent = 'Proceed to Pay';
bgContainerElement.appendChild(btnElement);




