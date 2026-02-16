const schoolName = "ABC School";
let studName = "JOHN";
let score = 80;
function greet(name = "Student", marks = 0) {
    return `Hello ${name}, your score is ${marks} at ${schoolName}.`;
}
const message = greet(studName, score);
console.log(`${message}`);