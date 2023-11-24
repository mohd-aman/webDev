// var arr = ['c',2,'sdfjklsa',true,99]
// console.log(arr);

// var arr2 = [];

// var arr3 = [2,3,4,[453,45,6,'2'],'fdksaljkla']
// console.log(arr3);
// arr3[4] = "Hello world";
// console.log(arr3)
// console.log(arr3[3]);

// console.log(arr3.length);

var carCollection = ["Urus","Bmw","Swift","Audi"];
console.log(carCollection);
carCollection.push("Nano"); // add at the end of the array 
console.log(carCollection);
carCollection.pop(); // remove from the end of array

carCollection.unshift("Ferrari") // it will add in front of the array
console.log(carCollection);
carCollection.shift(); // it will remove from the first
console.log(carCollection);

carCollection.splice(2,0,"random car");
console.log(carCollection)

//Q. arr = [1,23,4,5,6,7,8,99]
//1. add 8978979 at 3rd position 
//2. add 90789 at 2nd position and remove what is already there
//3. remove from 3rd and 4th position
//4. add at last 9099
//5. add at start 549309803
