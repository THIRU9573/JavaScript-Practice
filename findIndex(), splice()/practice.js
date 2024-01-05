//Removing Items - splice():
// syntax: arr.splice(start index, howmany elements want to delete from start inedx)
//example1:

let myArray = [10, "seven", 20, 3.0, 8.9, 90];
myArray.splice(3, 2);
console.log(myArray);

//example 2
let bucketArray = [25, 33,45,66,76,87,90,50,46,65,78]
let deletedItems = bucketArray.splice(5,6)
console.log(bucketArray);
console.log(deletedItems);

//example 3
let bucket = [10, "seven", 20, 3.0, 8.9, 90];
myArray.splice(3, 0); // means no elements deleted
console.log(bucket);

//Addig Items - splice():
//syntax: arr.splice(start inedx, Delete count, item1, item2,....);
//example 1:

let bowl = [5,30,"six",55,70,22,50,]
bowl.splice(2, 0, "one", false);
console.log(bowl);


//Replacing the Items:
let cup = [5,30,"six",55,70,22,50,]
cup.splice(2, 1, "nine");
console.log(cup);

//findIndex()

let books = [2,5,7,8,130,44,70];
let itemsIndex = books.findIndex(function (eachItem){
    console.log(eachItem)
});

//return true/false:
let bus = [2,5,7,8,130,44,70];
let busIndex = bus.findIndex(function (eachItem){
    if (eachItem === 130){
        return true;
    }
    else{
        return false;
    }
});
console.log(busIndex);

// Example finding the customer with ID:

let customerData = [
    {
        name: "thirupathi",
        id: 101
    },
    {
        name: "varun",
        id: 102
    },
    {
        name: "vinod",
        id: 103
    },
    {
        name: "kalyan",
        id: 104
    }
];

let customerIndex = customerData.findIndex(function (eactItems) {
    if (eactItems.id === 102){
        return true;
    }
    else {
        return false;
    }
});
console.log(customerIndex);

