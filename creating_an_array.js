let myArray = [2, 3.5, "thiru",1];
console.log(myArray);
console.log(myArray[0]); // accessing the elements
console.log(myArray[2]);
// Modifying the elements
myArray[1] = 6;
myArray[2] = "varun";
console.log(myArray);
console.log(myArray[1]); // accessing the elements
console.log(myArray[2])
//Finding the array length
let lengthOfArray = myArray.length;
console.log(lengthOfArray);
//Adding the elements at end of  the array using push()
myArray.push("hello");
myArray.push("villian");
myArray.push(99)
console.log(myArray);
//remove the elements from end of  the array using pop()
let lastItem = myArray.pop();
console.log(lastItem);
// creating an HTML elemrnt using js
let h1Element = document.createElement('h1');
h1Element = 'Web Technologies';
console.log(h1Element);
