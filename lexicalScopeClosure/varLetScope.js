// let a = 10;

// {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);
// Q1


// let a = 2;
// {
//     let a = 3;
//     {
//         let a = 4;
//         {
//             let a = 5;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

// Q2

// let a = 10;
// console.log("line number 2", a);
// function fn() {
//     // console.log("line number 4", a);
//     let a = 20;
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);


// var a = 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);


var a = 10;
function fn() {
    console.log("line number 4", a);
    var a = 20;
    a++;
    console.log("line number 7", a);
    if (a) {
        var a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}
fn();
console.log("line number 2", a);