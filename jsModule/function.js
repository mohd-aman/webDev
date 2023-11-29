
sayHi();

function sayHi(){
    console.log("Hello world")
}

function serverBeverages(drink="Mojito",quantity="1"){
    console.log("Here is your "+drink+" "+quantity)
}

serverBeverages();
serverBeverages("Coffee",2)


var sayHiExpression = function(){
    console.log("I am an function expression")
}


// console.log(sayHiExpression)

sayHiExpression();

function sum(num1,num2){
    return num1+num2
}
sum(3,8)
console.log(sum(3,5));

var arrowSayHi = ()=>{
    console.log("I am an arrow function")
}

arrowSayHi();

function HOF(callback){
    console.log("I am an Higher order function")
    callback();
    console.log("I am HOF and I am done with the execution")
}

HOF(sayHi);

// IIFE -> Immediately invoked function expression 

(function(){
    console.log("I am IIFE")
})();


//Function in js known as first class citizen due to the reasons that we can
// store it in a variable pass it to another fxn and a fxn can expect another fxn
// in it's parameter. 
