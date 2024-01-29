let input = document.querySelector('input');
let div = document.querySelector('div');

input.addEventListener('keyup',function(){
    getData(input.value);
})

async function getData(value){
    let response = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9715987&lng=77.5945627&str=${value}`);
    let json = await response.json();
    let data = json.data;
    console.log(data);
    if(data.statusMessage === 'Invalid query string'){
     return;   
    }
    let suggestions = data.suggestions;
    console.log(suggestions);
    let ul = document.createElement('ul');
    for(let i=0;i<suggestions.length;i++){
        let li = document.createElement('li');
        let liText = suggestions[i].text;
        li.innerText = liText;
        ul.appendChild(li);
    }
    console.log(ul);
    div.innerHTML = '';
    div.appendChild(ul);
}
