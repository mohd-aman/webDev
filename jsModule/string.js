var str = "Hello I am a string"
        
//final output should be ['Hello','I','am','a','string']
var arr = str.split(" ")
console.log(arr);

//final output after split operation -> "Hello-I-am-a-string"

var output = arr.join('-');
console.log(output);

//explore how to take a substring


let a = "I am a str"
let b = 'I am another str'

let c = "I am combination of strings" + a + b + " jkfsdlakj" + str;
console.log(c);
let d = `It supporst multi line strings
    fjlk;dajf
    jfldas;
    jl;fdas
    jkl;fldas
    ${c} fdkl;asjfdk  ${b} 
`