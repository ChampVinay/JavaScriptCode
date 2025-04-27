let a="vinay";
let b="kumar";
let c=a+b;
console.log(c);

let d = [1,2,3,4,5];
for(let i=0;i<d.length;i++){
    console.log(d[i]);
}
let e = d.map((item) => item * 2);
console.log(e);
let f = d.filter((item) => item > 2);
console.log(f);