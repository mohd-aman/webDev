let addBtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.remove-btn');
let modal = document.querySelector('.modal-cont');
let textArea = document.querySelector('.textarea-cont');
let mainCont = document.querySelector('.main-cont');
let allPriorityColor = document.querySelectorAll('.priority-color');
let addModal = true;
let taskColor = 'red';
let removeBtnActive = false;
let colorArr = ['red','blue','green','pink'];
let ticketArr = [];

let allFilterColor = document.querySelectorAll('.color');
for(let i=0;i<allFilterColor.length;i++){
    allFilterColor[i].addEventListener('click',function(){
        // console.log(allFilterColor[i]);
        let currentSelectedFilter = allFilterColor[i].classList[1];
        console.log(currentSelectedFilter);
        let allTicketsColor = document.querySelectorAll('.ticket-color');
        // console.log(allTicketsColor);
        for(let j=0;j<allTicketsColor.length;j++){
            let colorOfTicket = allTicketsColor[j].classList[1];
            console.log(colorOfTicket);
            if(colorOfTicket == currentSelectedFilter){
                //show it
                allTicketsColor[j].parentElement.style.display = 'block';
            }else{
                //hide it
                allTicketsColor[j].parentElement.style.display = 'none';
            }
        }
    })

    allFilterColor[i].addEventListener('dblclick',function(){
        let allTicketsColor = document.querySelectorAll('.ticket-color');
        for(let j=0;j<allTicketsColor.length;j++){
            allTicketsColor[j].parentElement.style.display = 'block';
        }
    })
}

//Toggle delete icon color
removeBtn.addEventListener('click',function(){
    if(removeBtnActive){
        removeBtn.style.color = 'black';
        removeBtnActive = false;
    }else{
        removeBtn.style.color = 'red';
        removeBtnActive = true;
    }  
})

// Instantiate
var uid = new ShortUniqueId();

addBtn.addEventListener('click',function(){
    console.log("Btn has been clicked")
    if(addModal){
        modal.style.display = 'flex' //show modal
    }else{
        modal.style.display = 'none' //hide modal
    }
    addModal = !addModal;
})

textArea.addEventListener('keydown',function(e){
    // console.log(e);
    let key = e.key;
    if(key === "Enter"){
        // console.log("Generate Ticket");
        // console.log(textArea.value);
        if(textArea.value == ""){
            textArea.value = "";
            alert("Please Enter some task!");
            return;
        }
        generateTicket(textArea.value);
        textArea.value = "";
        modal.style.display = 'none'
        addModal = true
    }
})

//selecting the priority of a task.
for(let i=0;i<allPriorityColor.length;i++){
    allPriorityColor[i].addEventListener("click",function(){
        // console.log(allPriorityColor[i])
        for(let j=0;j<allPriorityColor.length;j++){
            allPriorityColor[j].classList.remove('active');
        }
        // console.log(allPriorityColor[i])
        allPriorityColor[i].classList.add('active')
        taskColor = allPriorityColor[i].classList[1];
        console.log(taskColor)
    })
}

function generateTicket(task){
    // <div class="ticket-cont">
        // <div class="ticket-color green"></div>
        // <div class="ticket-id">#eidut3</div>
        // <div class="ticket-area">Some Task</div>
    // </div>
    let id = uid.rnd();
    let ticketCont = document.createElement("div");
    ticketCont.className = "ticket-cont";
    ticketCont.innerHTML = `<div class="ticket-color ${taskColor}"></div>
                            <div class="ticket-id">#${id}</div>
                            <div class="ticket-area">${task}</div>
                            <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`
    console.log(ticketCont)
    mainCont.appendChild(ticketCont);
    ticketArr.push({id:id,task:task,color:taskColor});
    let stringifiedArr = JSON.stringify(ticketArr);
    localStorage.setItem('tasks',stringifiedArr);
    console.log(ticketArr);

    //handle priority color
    let ticketColor = ticketCont.querySelector('.ticket-color');
    ticketColor.addEventListener('click',function(){
        // console.log("priority Color is clicked")
        // console.log(ticketColor);
        let currentColor = ticketColor.classList[1];
        // console.log(currentColor);
        ticketColor.classList.remove(currentColor);
        let currentColorIndex;
        for(let i=0;i<colorArr.length;i++){
            if(colorArr[i] == currentColor){
                currentColorIndex = i;
                break;
            }
        }
        let nextColorIndex = (currentColorIndex+1)%colorArr.length;
        let nextColor = colorArr[nextColorIndex];
        // console.log(nextColor);
        ticketColor.classList.add(nextColor)
    })

    //handle lock and unlock
    let taskArea = ticketCont.querySelector('.ticket-area');
    let lockUnlockBtn = ticketCont.querySelector('.lock-unlock i');
    lockUnlockBtn.addEventListener('click',function(){
        if(lockUnlockBtn.classList.contains('fa-lock')){
            lockUnlockBtn.classList.remove('fa-lock');
            lockUnlockBtn.classList.add('fa-lock-open')
            taskArea.setAttribute('contentEditable','true')
        }else{
            lockUnlockBtn.classList.remove('fa-lock-open');
            lockUnlockBtn.classList.add('fa-lock')
            taskArea.setAttribute('contentEditable','false')
        }
    })

    //handle delte of ticket
    ticketCont.addEventListener('click',function(){
        if(removeBtnActive)
            ticketCont.remove();
    })
}


//selecting the lock-unlock button 
// let lockUnlockBtn = document.querySelector(".lock-unlock");
// console.log(lockUnlockBtn);