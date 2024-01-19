// const a = 10;
// a = 20; not allowed

// const arr = [1,24,5,6,7];
// arr.push(7898);
// arr = [34043,4343]


//in primitive it is pass by value in js
//in referencet type it is call by sharing
function fxn(num,obj){
    // num = 20
    // console.log("Inside fxn --> ",num);
    obj.city = "Delhi";
    console.log(obj);
    // num = 50;
    obj = {
        name:"Ved"
    }
    console.log(obj);
    //num = 50, b = 10 --> changes are not reflected in original
    // console.log("Inside fxn --> ",num);
}

let b = 10;
let c = {
    name:"Iron Man"
}
fxn(b,c);
// console.log("Outside the fxn-> ",b);
console.log(c);