function fn(){
    function fn2(){
        // console.log(a);  // a is not defined
        let a = 10;
        console.log(a);  // a
    }
    fn2();
    //console.log(a);
    
}

fn();
//console.log(a);


