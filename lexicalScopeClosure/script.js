function fxn(){
    // console.log(a);
    function gxn(){
        var a = 30;
        function gxn2(){
            console.log(a);
        }
        gxn2();
    }
    gxn();
}

fxn();