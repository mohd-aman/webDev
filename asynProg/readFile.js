let fs = require('fs');
// console.log(fs);

console.log("First");
let f1 = fs.readFileSync('f1.txt');
console.log(f1+"");
let f2 = fs.readFileSync('f2.txt');
console.log(f2+"");

console.log("second");