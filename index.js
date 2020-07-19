const express = require("express");
const bodyParser = require("body-parser");
const wetherRequest = require("./requests/wether.request");

const app = express();

//0da2083414719a1e8dd793bdf9314697

app.set("view engine", "ejs");
app.use(express.static("public")); //where is static file?
app.use(bodyParser.urlencoded({ extended: true })); //use bodyParser for parse data;

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    const { city } = req.body; //destruction
    wetherRequest(city);
    console.log(city);
    res.render("index"); //what page what to return?
});

app.listen(3000, () => {
    console.log("Server has started on port 3000...");
});
