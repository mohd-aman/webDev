//primitive
// let a = 10;
// let b = 20;
// b = a; // b = 10, a = 10;
// b = 30; // b = 30, a = 10;
// console.log(a);
// console.log(b);


//reference
// let obj1 = {name:"Harsh"};
// let obj2 = {name:"Keshav"}
// let obj3 = obj1;
// obj3.name = "Aditya"
// obj2.name = "Suraj";
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

//shallow vs deep
// let obj1 = {name:"Harsh",
//             age:18,
//             address:{
//                 city:"Delhi",
//                 pincode:1104324
//             }}
// let obj2 = {...obj1}; //spread operator
// obj2.age = 19;
// obj2.address.city = "Bengaluru"
// console.log(obj1);
// console.log(obj2);


//deep copy 
let obj1 = {name:"Harsh",
            age:18,
            address:{
                city:"Delhi",
                pincode:1104324
            }}

let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.age = 19;
obj2.address.city = "Bengaluru"
console.log(obj1);
console.log(obj2);