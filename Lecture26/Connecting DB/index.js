const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/mayDB')
    .then(() => {
        console.log("DB connected.")
    })
    .catch((err) => {
        console.log("Error:" + err);
    })

const movieSchema = new mongoose.Schema({
    name: String,
    ratings: Number,
    isWatched: Boolean,
    year: Number
});

const Movie = mongoose.model("Movie", movieSchema);

const movie = new Movie({
    name: "Aquaman",
    ratings: 5,
    isWatched: false,
    year: 2019
})

movie.save().
    then(() => {
        console.log("movie addes succefully.");
    }).catch((err) => {
        console.log("Error" + err);
    })


app.listen(3000, () => {
    console.log("Servert start running at 3000 port")
})