let addBtn = document.querySelector('.add-btn');
let modal = document.querySelector('.modal-cont')
let addModal = true;

addBtn.addEventListener('click',function(){
    console.log("Btn has been clicked")
    if(addModal){
        modal.style.display = 'flex' //show modal
    }else{
        modal.style.display = 'none' //hide modal
    }
    addModal = !addModal;
})