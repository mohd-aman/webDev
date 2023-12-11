console.log(a); // can access before initialization

var a = 10; // initialization
console.log(a);
a = 20; // re assignment

console.log(a);

var a = 30; // re initialization
console.log(a)

// console.log(b); can't access before declaration
let b = 10;
console.log(b);

b = 20;
console.log(b);

// let b = 30; // re initialization not allowed
// console.log(b);

console.log(c) // can't access before declaration
const c = 10;
console.log(c);
 c = 30;
 console.log(c);

//  const d; // not allowed. need assign as well
//  d = 30; // assignment.

