var allStar = document.querySelectorAll(".star")
var h4Element = document.querySelector("h4");
var prevClicked;
for(var i=0;i<allStar.length;i++){
    allStar[i].addEventListener('click',function(e){
        // console.log(e.target.classList);
        var starClicked = e.target.classList[1];
        console.log(starClicked);
        removeColor(allStar.length);
        addColor(starClicked);
        prevClicked = starClicked;
        h4Element.innerText = "Rating : " + starClicked;
    })

    allStar[i].addEventListener('mouseover',function(e){
        var starClicked = e.target.classList[1];
        removeColor(prevClicked);
        addColor(starClicked);
    })
    
    allStar[i].addEventListener('mouseleave',function(){
        removeColor(allStar.length);
        addColor(prevClicked);
    })
}


function addColor(n){
    for(var j=0;j< n;j++){
        allStar[j].classList.add("yellow");
    }
}

function removeColor(n){
    for(var j=0;j< n;j++){
        allStar[j].classList.remove("yellow");
    }
}
