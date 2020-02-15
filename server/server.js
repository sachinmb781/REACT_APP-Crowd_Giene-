const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 1000;
const routes = require("./routes/api");
const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://sachin123:sachin123@cluster0-cnlzk.mongodb.net/test?retryWrites=true&w=majority";
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    // {
    //  console.log(err);
    //  return;
    // }
    console.log("connection success with mongo atlas");
  }
);
//app.user("/api", routes);
//top level ftn

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () => {
  console.log("your post is here at " + PORT);
});
