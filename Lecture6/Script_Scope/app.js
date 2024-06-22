function fun() {
    return (
        function returnfun() {
            console.log("return fun");
        }
    )
}

// function innerfun() {
//     console.log("inner fun");
// }

const value = fun();
console.log(value());

