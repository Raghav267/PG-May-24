const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/hello", (req, res) => {
    res.send("Hello we are learning templating")
})

app.get("/home", (req, res) => {
    const random = Math.floor(Math.random() * 10) + 1;
    res.render("home", { random });
})

app.get("/r/:subredit", (req, res) => {
    const { subredit } = req.params;
    res.render("subredit", { subredit });
})



app.listen(3000, () => {
    console.log("Server started at 3000 port!");
})