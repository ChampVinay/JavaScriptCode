// alert("inter a number");
// var num = prompt("Enter a number" + " (e.g. 1, 2, 3, ...): ");
//  num=parseInt(num);
//  document.write("The number is: " + num);

 alert("inter a number which you want to show table in ui");
 let num1 = prompt("Enter a number" + " (e.g. 1, 2, 3, ...): ");
 num1=parseInt(num1);
 let start = 1;
 while(start<=10){
    let ans=num1 + " * " + start + " = " + (num1*start) + "<br>";
    let row = document.createElement("div");
    row.innerHTML = ans;
    if (start % 2 === 0) {
        row.style.color = "green";
    } else {
        row.style.color = "black";
    }
    document.body.appendChild(row);
    start++;
   
    }
    document.body.style.backgroundColor = "lightblue";
    document.write("<br>");