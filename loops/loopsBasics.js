// This is a simple for loop that prints the value of i from 0 to 9
for(let i=0;i<10;i++){
    console.log("The value of i is: " + i);
}

let table = 5; // The multiplication table to generate
let limit = 10; // The limit for the multiplication table
for (let i = 1; i <= limit; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
}

// This is a simple while loop that prints the value of i from 0 to 9
let j = 0;
while (j < 10) {
    console.log("The value of j is: " + j);
    j++;
}
// This is a simple do-while loop that prints the value of k from 0 to 9
let k = 0;
do {
    console.log("The value of k is: " + k);
    k++;
}while (k < 10);

// This is a simple for-in loop that iterates over the properties of an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// This is a simple for-of loop that iterates over the elements of an array
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// This is a simple forEach loop that iterates over the elements of an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

// This is a simple map loop that creates a new array by applying a function to each element of an array
const squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares); // Output: [1, 4, 9, 16, 25]