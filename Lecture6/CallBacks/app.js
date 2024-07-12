function fun(func) {
    func();
}

// What is fun here
// fun is hof

function innerfun() {
    console.log("Inside the outer functtion");

}

// fun(innerfun);

// function greathan(m){
//     return function(n){
//         return m>n;
//     }
// }