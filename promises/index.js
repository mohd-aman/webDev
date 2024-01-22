let myPromise = new Promise(function(resolve,reject){
    let a = 5;
    let b = 5;
    if(a == b){
        resolve("Success !!! and yes they are equal")
    }else{
        reject("No, It's not equal");
    }
})
// console.log(myPromise);
myPromise.then(function(data){
    console.log("Promise kept")
    console.log(data);
})

myPromise.catch(function(error){
    console.log("Promise could not kept")
})

myPromise.finally(function(){
    console.log("Move on from this Promise");
})