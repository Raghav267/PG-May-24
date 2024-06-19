// var a = 100;
// function b() {
//     var c = 200;
//     console.log(c);
// }

// console.log(a);
// b();

// execution context => 1. Memeory Creation phase . 2/ Code Execution Phase



// console.log(a);
// b();
// var a = 100;
// function b() {
//     var c = 200;
//     console.log(c);
// }

console.log(a);
let a = 200;
function b() {
    var c = 27;
    console.log(c);
    function d() {
        console.log("Inside D");
    }
    d();
}


b();



