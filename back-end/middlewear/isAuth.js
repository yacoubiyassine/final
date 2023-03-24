const jwt = require("jsonwebtoken");
const { collection } = require("../models/userModel");


exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify("hello");
    if (!decode) {
      res.status(400).send("you are not auth");
    }
    const user = await collection.findById(decode.id);
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
  }
};