const express = require("express");
const app = express();

app.set("view engine", "ejs");

const comments = [
    {
        id: 0,
        text: "This is my first comment"
    },
    {
        id: 1,
        text: "this is my second comment"
    }
]

app.get("/comments", (req, res) => {
    res.render();
})

app.listen(3000, () => {
    console.log("server srarted at 3000 port")
})