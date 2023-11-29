//empty object
// var obj = {}

//CRUD -> Create,Read, Update and Delete.

var obj = {
            name:"Steve Rogers",
            age:95,
            gender:'M',
            isAvenger:false,
            friends:['Tony','Bruce','Natasha'],
            address:{
                country:"India",
                city:"Blr"
            },
            // 9:"Hfjkd;lsajkf;dl"
            // a:"Hello"
        }
console.log(obj);
//dot notation
console.log(obj.name)
//bracket notation
console.log(obj["name"]);
var a = "age";
//bracket notation will treat a like a variable 
console.log(obj[a]);
//dot notation will treat a like a string.
console.log(obj.a);

var friendsOfSteve = obj.friends;
console.log(friendsOfSteve[0]);
console.log(obj.friends[1])

var addr = obj.address;
console.log(addr);
console.log(addr.country);

console.log(obj.address.city)

//update

obj.isAvenger = true;


obj.friends.push("Sam")
console.log(obj);


obj.movies = ["First Avenger","Civil War","Endgame"]
console.log(obj);


delete obj.age;
console.log(obj);