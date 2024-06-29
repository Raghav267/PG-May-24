console.log("Start")

function fun() {
    console.log("Inside the fun")
}



// function delay() {
//     const x = new Date().getTime();
//     while (new Date().getTime() <= x + 5000) { };
//     fun();
// }

// delay();

// setTimeout(() => { fun() }, 5000)

setTimeout(() => {
    fun();
}, 1)

let num = 100;
while (num < 200) {
    console.log(num);
    num = num + 10;
    function delay() {
        const x = new Date().getTime();
        while (new Date().getTime() <= x + 5000) { };
    }

    delay();
}




console.log("End");