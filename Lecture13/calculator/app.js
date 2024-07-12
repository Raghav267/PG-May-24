const section = document.getElementById("section");
const screen = document.getElementById("screen");

section.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        if (button.innerText === "C") {
            screen.value = "";
        }
        else if (button.innerText === "=") {
            try {
                screen.value = eval(screen.value);

            }
            catch (e) {
                screen.value = "Invalid Operation"
            }
        }
        else {
            screen.value += button.innerText;
        }
    }
})