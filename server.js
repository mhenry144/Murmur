const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
let PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello World" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I recieve your POST request. This is what you sent me ${req.body.post}`
  );
});

var mongoConfig = process.env.MONGODB_URI || "mongodb://localhost/murmurDB";
mongoose.connect(
  mongoConfig,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

app.listen(PORT, function () {
  console.log("Express server started at port: http://localhost:" + PORT);
});
