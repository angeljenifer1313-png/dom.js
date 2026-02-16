//variables
let studName = "john";
let score = 85;
console.log("Student Name: " + studName);
console.log("Score: " + score);

//if/else
let studName = "Angel";
let score = 65;

if (score >= 50) {
    console.log(studName + " Passed");
} else {
    console.log(studName + " Failed");
}

//function
function greet(studName) {

    return "Hello " + studName;
}

let message = greet("John");
console.log(message);

//arrays
let scores = [75, 60, 90, 45];
console.log("First Index Value:", scores[0]);
console.log("Length of Array:", scores.length);

//loop
let scores = [75, 60, 90, 45];
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

//object
let student = {
    name: "jeni",
    age: 24,
    grade: "A"
};
console.log("Name:", student.name);
console.log("Age:", student.age);

