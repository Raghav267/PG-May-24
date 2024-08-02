const givemeajoke = require("give-me-a-joke");
const color = require("colors");
const figlet = require("figlet");

givemeajoke.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});

figlet("Hello World!!", (err, data) => {
    console.log(data);
});