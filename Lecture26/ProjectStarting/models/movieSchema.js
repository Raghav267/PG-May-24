const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    ratings:{
        type:Number,
        require:false
    },
    year: Number,
    isWatched: {
        type:Boolean,
        require:true
    }
});

const Movie = mongoose.model("Movie",movieSchema);

module.exports = Movie;