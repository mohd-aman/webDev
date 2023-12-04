var allStar = document.querySelectorAll(".star")
var h4Element = document.querySelector("h4");

for(var i=0;i<allStar.length;i++){
    allStar[i].addEventListener('click',function(e){
        // console.log(e.target.classList);
        var starClicked = e.target.classList[1];
        console.log(starClicked);
        for(var j=0;j<allStar.length;j++){
            allStar[j].classList.remove("yellow");
        }
        for(var j=0;j<starClicked;j++){
            allStar[j].classList.add("yellow");
        }
        h4Element.innerText = "Rating : " + starClicked;
    })
}
