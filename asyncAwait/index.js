const fs = require('fs');

async function gxn(){
    try{
        console.log('10');
        let f1Data = await fs.promises.readFile('f87.txt');
        console.log("0");
        let f2Data = await fs.promises.readFile('f2.txt');
        console.log(f2Data+"");
        // let f3Data = await fs.promises.readFile('f3.txt');
        // console.log(f3Data+"");
    }catch(error){
        console.log(error);
    }
    
}

console.log("1")
gxn();
console.log("2");

// console.log(gxn());



// function delay(ms) {
//     return new Promise(resolve => {
//             setTimeout(resolve, ms);
//     });
// }
// console.log(1);
// async function exampleAsyncFunction() {
//         console.log('Start');
//         await delay(2000);
//         console.log('After 2 seconds');
//         console.log('end')
// }
// exampleAsyncFunction(); console.log(2);s