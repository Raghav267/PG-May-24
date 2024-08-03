const express = require("express");
const app = express();
const path = require("path");


app.set('view engine', "ejs");
app.set("views", path.join(__dirname, 'views'));

app.get("/hello", (req, res) => {
    res.render("index")
})



app.listen(3000, () => {
    console.log("Serve restart running at 3000 port")
})