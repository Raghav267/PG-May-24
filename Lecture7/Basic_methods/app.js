// Map method

// const arr = [1, 2, 3, 4, 5];

// function squared(num, i) {
//     return num ** 2 + i;
// }

// const newArr = arr.map(squared)

// console.log(newArr);


// const fruits = ["mango", "Apple", "Litchi", "banana", "guava"];

// const UppercaseArray = fruits.map((fruit) => fruit.toUpperCase());
// console.log(UppercaseArray);
// console.log(fruits)


// Filter Meethod

// const arr = [22, 23, 34, 34, 4, 56, 78, 91, 3, 5, 67, 6, 8];

// const evenArr = arr.filter((element) => {

//     if (element % 2 === 0) {
//         return element;
//     }
//     // return element % 2 === 0 ? element
// })

// const oddArr = arr.filter((element) => {

//     // if (element % 2 !== 0) {
//     //     return element;
//     // }
//     return element % 2 !== 0 ? element : false
// })

// console.log(arr);
// console.log(evenArr);
// console.log(oddArr);

//Reduce function

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => {
//     return (
//         accumulator + currentValue
//     )
// });

// console.log(sumWithInitial);

// const fruits = ["mango", "Apple", "Litchi", "banana", "guava"];

// const commaString = fruits.reduce((acc, curr) => {
//     return acc + curr.toUpperCase();
// });

// console.log(commaString);

// Sort

// const array1 = [1, -9, -8, -98, 568, 4, 60, 30, 999, 100, 1, -98, -87, 12, 56];
// const array1 = ["ab", "a", "aa", "aabcd"];
// array1.sort((a, b) => {
//     a.length < b.length
// });
// console.log(array1)

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => {
    return b - a; // decreasing
});
console.log(array1);

