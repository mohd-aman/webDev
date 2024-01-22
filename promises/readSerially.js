let fs = require('fs');

let f1Promise = fs.promises.readFile('f1.txt');

f1Promise.then(function(dataOfFile1){
    console.log(dataOfFile1+"");
    return fs.promises.readFile('f2.txt');
}).then(function(dataOfFile2){
    console.log(dataOfFile2+"")
    return fs.promises.readFile('f3.txt');
}).then(function(dataOfFile3){
    console.log(dataOfFile3+"")
}).catch(function(error){
    console.log(error);
})