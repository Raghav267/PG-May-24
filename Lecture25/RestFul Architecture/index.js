const express = require("express");
const app = express();
const path = require('path');

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let comments = [
    {
        id: 0,
        author: "Himahsu",
        comment: "I am learning express"
    },
    {
        id: 1,
        author: "Utkarsh",
        comment: "I am learning express and Node"
    }
]

// List all the comments
app.get("/comments", (req, res) => {
    res.render("index", { comments })
})

//Show the form to create a new comment
app.get("/comments/new", (req, res) => {
    res.render("new");

})

// creating a new comment in comments array
app.post("/comments", (req, res) => {
    const { author, comment } = req.body;
    comments.push({ id: comments.length + 1, author, comment });
    res.redirect("/comments");

})

//Display a particular Comment
app.get("/comments/:commentId", (req, res) => {
    const { commentid } = req.params
    const foundComment = comments.find((comment) => comment.id === commentid);
    res.render("show", { foundComment });
})



app.listen(3000, () => {
    console.log("Server staarted at 3000 port.")
})