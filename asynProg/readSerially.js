let fs = require('fs');

console.log("first");

fs.readFile('f3.txt',function cb3(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"")
        fs.readFile('f2.txt',function(error,data){
            if(error){
                console.log(error);
            }else{
                console.log(data+"")
                fs.readFile('f1.txt',function(error,data){
                    if(error){
                        console.log(error);
                    }else{
                        console.log(data+"")
                    }
                })                
            }
        })        
    }
})

console.log("second");