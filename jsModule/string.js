var str = "Hello I am a string"
        
//final output should be ['Hello','I','am','a','string']
var arr = str.split(" ")
console.log(arr);

//final output after split operation -> "Hello-I-am-a-string"

var output = arr.join('-');
console.log(output);

//explore how to take a substring