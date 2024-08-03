const express = require("express");
const app = express();

app.get("/hello/:subreddit", (req, res) => {
    // console.log(subreddit);
    // console.log(req.params);
    const { subreddit } = req.params;

    res.status(200).send(`hello ${subreddit} from server `);
})

app.get("/happy", (req, res) => {
    console.log(req.query);

    res.send("Query Params")
})





app.listen(3000, () => {
    console.log("Server start running at 3000 port");
})