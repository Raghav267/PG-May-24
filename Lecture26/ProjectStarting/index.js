const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/matDB").then(() => {
    console.log("DB connected")
}).catch((err) => {
    console.log("Error:" + err);
})



app.set("views", path.join(__dirname, "views"));



app.listen(3000, () => {
    console.log("Server Start Running at 3000 port.")
})