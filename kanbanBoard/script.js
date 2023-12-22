let addBtn = document.querySelector('.add-btn');
let modal = document.querySelector('.modal-cont');
let textArea = document.querySelector('.textarea-cont');
let mainCont = document.querySelector('.main-cont');
let allPriorityColor = document.querySelectorAll('.priority-color');
let addModal = true;
let taskColor = 'red';

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
}