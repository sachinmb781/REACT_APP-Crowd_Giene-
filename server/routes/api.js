var express = require("express");
var router = express.Router();
const RegisterModel = require("../models/user");
const jwt = require("jsonwebtoken");
router.use("/register", (req, res) => {
  var registerData = {
    firstname: "sachin",
    lastname: "mb",
    email: "sachinmb1997@gmail.com",
    password: "123456789"
  };
  var register = new RegisterModel(registerData);
  register.save(err => {
    if (err) {
      console.log(err);
    }
    console.log("/register");
    console.log(register);
    // console.log("your data stored in atlas");
    // let payload = register.email;
    // let token = { subject: register._id };
    // let token = jwt.sign(payload, "secretkey");
    // res.send(token);
  });
});
router.use("/login", (req, res) => {
  //var data = req.body;
  let useremail = "abc@gmail.com";
  RegisterModel.findOne({ email: useremail }, (err, user) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!user) {
      res.status(402).send("No email registered with this email");
    }
    if (user.password != pass) {
      res, status(401).send("wrong password");
    }
    // let payload = { subject: user._id };
    // let token = jwt.sign(payload);
    console.log(user);

    res.send(user);
  });
});
// function verifyToken(req, res, next) {
//   if (!req.headers.authorization) {
//     return res.status(401).send("Unauthorized request");
//   }
//   let token = req.headers.authorization.split(" ")[1];
//   if (token == "null") {
//     return res.status(401).send("Unauthorized request");
//   }
//   let payload = jwt.verify(token, "secretkey");
//   if (!payload) {
//     return res.status(401).send("Unauthorized request");
//   }
//   req.userId = payload.subject;
//   next();
// }
// router.get("/home", verifiyToken, (req, res) => {
//   let homeData = [
//     {
//       _id: "1",
//       name: "auto expo special",
//       description: "lorem ipsum",
//       date: "2012-04-23T18:25:43.511z"
//     }
//   ];
//   res.json(homeData);
// });
module.exports = router;
