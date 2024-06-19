// console.log("Functions");

// function add() {
//     const a = 100;
//     const b = 200;
//     const res = a + b;
//     console.log(res);

// }

// add();



// function cube(num) { // Parameter
//     return num ** 3;
// }

// const ans = cube(3); // Arguments

// console.log(ans);



// Default Parameters

function abc(a = 10, b, c) {
    return (a + b + c);
}

const ans1 = abc(5, 5, 5);
console.log(ans1);

const ans = abc(5, 5);
console.log(ans);