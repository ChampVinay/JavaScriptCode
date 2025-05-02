
// 1. Variable Declaration and Initialization
//this is primitive data types in js
let a="vinay";
let b=20;
let c=BigInt(20);
let d=null;
let e=undefined;
let f=true;
let g=Boolean("his is very good man");
let h=Symbol("this is symbol");
console.log(a ,b,c,d,e,f,g,h);
console.log(typeof a ,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g,typeof h);
console.log(a instanceof String); // it will give false because a is not an object
console.log(b instanceof Number); // it will give false because b is not an object

// 2. Object Declaration and Initialization
const i = {name:"vinay", age:20, city:"delhi"};
let j = new Object({name:"vinay", age:20, city:"delhi"});
console.log(i ,j);
console.log(typeof i ,typeof j);
console.log(i.name,j.age);
