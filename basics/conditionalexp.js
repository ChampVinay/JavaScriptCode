/**
 * This file demonstrates the use of conditional expressions in JavaScript.
 * 
 * Conditional expressions, also known as ternary operators, are a concise way 
 * to perform conditional logic. They evaluate a condition and return one of 
 * two values based on whether the condition is true or false.
 * 
 * Syntax:
 * condition ? expressionIfTrue : expressionIfFalse;
 * 
 * Example:
 * const result = (age >= 18) ? 'Adult' : 'Minor';
 * 
 * This approach is often used for simple conditional assignments or expressions.
 */
//conditional expression 
//if you want to use prompt, uncomment the line below
//let age = prompt("Enter your age: ");
const age =20; // Convert input to an integer
const category = (age >= 18) ? 'Adult' : 'Minor';
console.log(`The person is an ${category}.`);

const score = 85;
const grade = (score >= 90) ? 'A' : (score >= 75) ? 'B' : 'C';
console.log(`The grade is ${grade}.`);

// Using conditional expressions in function return values
function getStatus(isActive) {
    return isActive ? 'Active' : 'Inactive';
}

console.log(`The status is ${getStatus(true)}.`);
console.log(`The status is ${getStatus(false)}.`);

//if else statement
if (age >= 18) {
    console.log("Adult");
}else if (age >= 13) {
    console.log("Teenager");
}else {
    console.log("Child");
}


//switch statement
switch (age) {
    case 18:
        console.log("You are 18 years old.");
        break;
    case 20:
        console.log("You are 20 years old.");
        break;
    default:
        console.log("Age is not specified.");
        break;
}

