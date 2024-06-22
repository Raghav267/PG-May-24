function fun() {
    let a = 100;
    function innerfun() {
        a = a + 1
        console.log(a);
    }
    return innerfun;
}
var f = fun();
console.log(f);
f();

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).


// functions bundled together with its lexical enivronment form the closure.