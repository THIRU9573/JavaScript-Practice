let person = {
    name : "thirupathi",
    age : 25,
    gender: "Male"
};
console.log(person.name);
//Modifying obejct with Dot Notation
person.name = "varun";
console.log(person.name);
person.age = 26;
console.log(person.age);
console.log(person);
//Adding new properties using Dot Notation
person.villege = 'Rampoor';
console.log(person)

//Modifying with Bracket Notation
person['name'] = "Rudra";
console.log(person['name']); 
person['age'] = 26;
console.log(person['age']);
//Adding preperties with Bracket Notation
person['villege'] = 'Rangapoor';
console.log(person);

/* Property Value:
The value of object property  can be
-Function
-Array
-object
*/

//Function as a Value:
let person2 = {
    name : "Anand",
    age: 23,
    run:function(){
        console.log('Start Running.')
    }
};
person2.run();

//Array as Value:
let person3 = {
    name: "varun",
    age : 26,
    habits : ["reading books", "cooking","playing cricket"]
};

console.log(person3.habits[1]); //Dot Notation
console.log(person3['habits'][2]); //Bracket Noattion

let person4 = {
    name : "Rahul",
    age : 28,
    habits : ['reading','singing','cooking'],
    tractor : {
        name : 'jandeer',
        model : 4450,
        color : 'green'
    }
};

console.log(person4.tractor.model);  //dot Notation
console.log(person4.tractor['color']); //bracket Notation

