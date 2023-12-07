var incrementBtn = document.querySelector(".increment-btn")
var decrementBtn = document.querySelector(".decrement-btn");
var countElement = document.querySelector("h2");
var resetBtn = document.querySelector(".reset-btn")
var count = 0;

incrementBtn.addEventListener("click",function(){
    count++;
    countElement.innerText = "Count : "+count;
})

decrementBtn.addEventListener('click',function(){
    if(count == 0){
        return;
    }
    count--;
    countElement.innerText = "Count : "+count
})

resetBtn.addEventListener("click",function(){
    count = 0;
    countElement.innerText = "Count : "+ count;
})