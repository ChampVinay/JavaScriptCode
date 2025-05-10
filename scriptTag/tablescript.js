console.log("Hello, this is a test message from the scriptTag/edgevalidation.js file.");
// Define an array of objects to store table data
const tableData = [
    { orderId: 1, customerName: "John Doe", product: "Laptop", quantity: 1, price: "$1200" },
    { orderId: 2, customerName: "Jane Smith", product: "Smartphone", quantity: 2, price: "$800" },
    { orderId: 3, customerName: "Alice Johnson", product: "Tablet", quantity: 1, price: "$400" },
    { orderId: 4, customerName: "Bob Brown", product: "Headphones", quantity: 3, price: "$150" },
    { orderId: 5, customerName: "Charlie Davis", product: "Smartwatch", quantity: 1, price: "$250" },
    { orderId: 6, customerName: "Diana Evans", product: "Monitor", quantity: 2, price: "$300" },
    { orderId: 7, customerName: "Ethan Foster", product: "Keyboard", quantity: 1, price: "$100" }
];

// Get the table body element
const tableBody = document.querySelector("table tbody");

// Loop through the array and add rows to the table
tableData.forEach(item => {
    const row = document.createElement("tr");

    // Create and append cells for each property
    Object.values(item).forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    // Append the row to the table body
    tableBody.appendChild(row);
});


//now we want to access table element and its childeren
console.log(document.querySelector("table"));
console.log(document.querySelector("table").children);
console.log(document.querySelector("table").firstElementChild);
console.log(document.querySelector("table").lastElementChild);