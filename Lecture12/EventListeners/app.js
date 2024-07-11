const btn = document.getElementById('btn');

function scream() {
    console.log("Screamm!!!")
}

function shout() {
    console.log("Shout!!!")
}

// btn.onclick = shout;
// btn.onclick = scream;

btn.addEventListener('click', scream);
btn.addEventListener('click', shout);


const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", function () {
    console.log(this);
})


