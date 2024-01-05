/*
//stringify(): exmaple 1:

let profile = {
    name: "thirupathi",
    age: 26,
    designation: "Data scientist"

};

let strigingifiedProfile = JSON.stringify(profile);
console.log(strigingifiedProfile);
console.log(typeof(strigingifiedProfile));
*/

/* parse(): example2:
let strigingifiedProfile = '{"name":"thirupathi", "age":26, "desingation":"Data scientist" }';
let parsedProfile = JSON.parse(strigingifiedProfile);
console.log(parsedProfile);
console.log(typeof(parsedProfile));
*/

//example 3:
let person = {
    name : "thirupathi",
    age : 26,
    city: "hyderabad"
}

//stringify():
let strigingifiedProfile = JSON.stringify(person);

localStorage.setItem("profileDetails", strigingifiedProfile);
let strigingifiedProfileLocalStorage = localStorage.getItem("profileDetails");

//parse():
let parsedProfile = JSON.parse(strigingifiedProfileLocalStorage);
console.log(parsedProfile);
console.log(typeof(parsedProfile));
