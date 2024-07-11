const gp = document.getElementById("gp");
const p = document.getElementById("p");
const c = document.getElementById("c");

c.addEventListener("click", () => {
    console.log("you clicked Child.")
})

p.addEventListener("click", () => {
    console.log("you cliccked parent")
})

gp.addEventListener("click", () => {
    console.log("You clicked Grand Parents")
}, true)