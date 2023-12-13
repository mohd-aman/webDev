function fxn(){
    let a = 10;
    function gxn(){
        console.log(a);
    }
    return gxn;
}

let innerFxn = fxn();

innerFxn();