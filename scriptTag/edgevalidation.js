// console.log("Hello, this is a test message from the scriptTag/edgevalidation.js file.");
// alert("what is your age?");
// let age = prompt("Enter your age" + " (e.g. 1, 2, 3, ...): ");

// const validateAge = (age) => {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// };

// if(validateAge(age)) {
//     console.log("You are an adult.");
//      //alert("You are an adult.");
//         if(confirm("you want to add this age in your profile?")) {
//             const messageContainer = document.createElement('div');
//             messageContainer.textContent = "You are an adult.";
//             document.body.appendChild(messageContainer);
//         }
// }
// else {
//     const messageContainer = document.createElement('div');
//     messageContainer.textContent = "You are not an adult.";
//     document.body.appendChild(messageContainer);
//     alert("You are not an adult.");
//     const warningMessage = document.createElement('p');
//     warningMessage.textContent = "You are not an adult.";
//     document.body.appendChild(warningMessage);
// }
// alert("You are not an adult.");

//accessing the children of the body element
console.log(document.body.children);
//accessing the first child of the body element
console.log(document.body.firstChild);
//accessing the last child of the body element
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);
