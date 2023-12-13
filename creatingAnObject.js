let person = {
    name: "thirupathi",
    age: 25,
    gender: "Male",
    "1": "varun",
    "my choice": "you"
};

console.log(person);

// Accessing properties using Dot Notation
console.log(person.age);

// Accessing properties using Bracket Notation
console.log(person['name']);

// Accessing the invalid identifier through Dot Notation will result in a syntax error
// console.log(person.1) // Syntax error
// To access the invalid identifier, use Bracket Notation
console.log(person['1']);
console.log(person['my choice']);

// Accessing non-existing properties will return undefined
console.log(person.class);
console.log(person['class']);

// Variable as a key will return undefined
let key = "name";
console.log(person.key); // Incorrect, will result in undefined
console.log(person[key]);

// Object Destructuring:
// To unpack properties from the object, use object destructuring
let { name: personName, age: personAge } = person;
console.log(personName);
console.log(personAge);
