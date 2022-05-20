const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//urlencoded : to have access to the form input
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function(req, res) {

    var height = parseFloat(req.body.height)
    var weight = parseFloat(req.body.weight)

    var result = weight / (height * height)

    res.send("Your BMI is " + result)

});

app.listen(3000, function() {
    console.log("Server has started on port 3000");
});