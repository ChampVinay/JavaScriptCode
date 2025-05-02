
let marks=[92, 85, 76, 88, 95, 89, 91, 84, 78, 90];
let totalMarks=0;
let averageMarks=0;
let highestMarks=0;
let lowestMarks=100;
let marksCount=marks.length;
let fullMarks=100;
let count =0;
let totalmarksofallsubjects=0;
// Calculate total marks
for(let i=0;i<marksCount;i++){
    totalMarks+=marks[i];
    count++;
}

//totalMarks all orver subjects
totalmarksofallsubjects=count * fullMarks;

averageMarks=(totalMarks * fullMarks)/totalmarksofallsubjects;
// Calculate highest and lowest marks
for(let i=0;i<marksCount;i++){
    if(marks[i]>highestMarks){
        highestMarks=marks[i];
    }
    if(marks[i]<lowestMarks){
        lowestMarks=marks[i];
    }
}
// Calculate percentage
let percentage=(totalMarks/totalmarksofallsubjects)*100;

console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);
console.log("Highest Marks: " + highestMarks);
console.log("Lowest Marks: " + lowestMarks);
console.log("Percentage: " + percentage + "%");
console.log("Total Marks of all subjects: " + totalmarksofallsubjects);
console.log("Marks Count: " + marksCount);
console.log("Marks: " + marks);
console.log("Full Marks: " + fullMarks);
console.log("Count: " + count);
console.log("Total Marks of all subjects: " + totalmarksofallsubjects);

marks.push(100); // Add a new mark to the array
console.log("Updated Marks: " + marks); // Display the updated array of marks
marks.pop(); // Remove the last mark from the array
console.log("Updated Marks after pop: " + marks); // Display the updated array of marks after pop
marks.shift(); // Remove the first mark from the array
console.log("Updated Marks after shift: " + marks); // Display the updated array of marks after shift

let marks2=[100, 95, 90, 85, 80, 75, 70, 65, 60, 55];
marks = marks.concat(marks2); // Concatenate two arrays
console.log("Concatenated Marks: " + marks); // Display the concatenated array of marks
marks.sort(); // Sort the array in ascending order
console.log("Sorted Marks: " + marks); // Display the sorted array of marks
marks.sort(function(a, b){return a-b}); // Sort the array in descending order
console.log("Sorted Marks in Descending Order: " + marks); // Display the sorted array of marks in descending order

// Display each mark in the array using for method

for(let mark of marks){
    console.log(mark); // Display each mark i console.log(marks)
}

// Display each mark in the array using forEach method
let fruits=["apple", "banana", "orange", "grape", "kiwi"];
fruits.forEach(function(fruit){
    console.log(fruit); // Display each fruit in the array using forEach method
});