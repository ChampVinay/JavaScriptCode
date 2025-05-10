let marks=[100, 95, 90, 85, 80, 75, 70, 65, 60, 55];
// Display each mark in the array using for method

let maxmarks=marks.map((value, index, array) => {
    console.log("Marks: " + value,index,array); // Display each mark in the array
   
    return  value +index; // Multiply each mark by 2
});

console.log("Marks after Map: " + maxmarks); // Display the array of marks after map

//filter method
let filteredMarks=marks.filter((m)=>{
    return m > 70; // Filter marks greater than 70
});
console.log("Filtered Marks: " + filteredMarks); // Display the array of filtered marks

//reduce method
// Sum all marks using reduce method
//accumulator is the total marks and currentValue is the current mark
// The reduce method takes a callback function and an initial value for the accumulator
let totalMarks=marks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Sum all marks
}, 0);

console.log("Total Marks: " + totalMarks); // Display the total marks