const fs = require("fs");
const path = require("path");

// console.log(path.dirname);




// fs.readFile("./read.txt", "utf8", (err, data) => {
//     console.log(data);

// })

// fs.writeFile("./read.txt", "I am writing this from write", "utf8", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File written   suceefulyy")

// });

// console.log("Hello from node");

//Rest Params

// function add(a, b, c, ...params) {
//     console.log(a + b + c + params.reduce((acc, curr) => curr + acc, 0));
// }

// add(4, 5, 12, 35, 5, 89, 56, 100);

// ... = spread operator}

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);