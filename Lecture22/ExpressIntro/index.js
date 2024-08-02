const express = require("express");
const app = express();

// app.use((req, res) => {
//     // console.log("Inside my app.use")
//     // console.log(req);
//     console.log(res);
// })

// Routing
// for each unique request you get a unique response

// nodemon 

app.get("/cat", (req, res) => {
    // console.log(req);
    res.status(200).send("<h1>Hello wolrd</h1>")
})

app.get("/dog", (req, res) => {
    // console.log("This is from dog routes");
    res.send("this is from dog routes")
})

app.all("*", (req, res) => {
    res.send("Please check the url")
})



app.listen(3000, () => {
    console.log("server start runningat 3000 port")
})