const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validate = require("./validators");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const myError = (res, err) => {
  res.json({ success: false, response: err.message });
};

const usersControllers = {
  createUser: async (req, res) => {
    const { first_name, last_name, email, password, img, country } = req.body;
    const encryptPassword = (password) => bcrypt.hashSync(password);
    const nameOk = validate.name(first_name) && validate.name(last_name);
    const emailOk = validate.email(email);
    const imgOk = img.includes(".");
    try {
      if (!nameOk) {
        throw new Error("Check the name fields. It shouldn't contain numbers");
      }
      if (!emailOk) {
        throw new Error(
          "Check the email field. Try this format: example@example.example"
        );
      }
      if (password.length < 8) {
        throw new Error(
          "Password too short. It must have at least 8 characters"
        );
      }
      if (!imgOk) {
        throw new Error(
          "Check the image field. It doesn't seem to have an extension"
        );
      }
      if (!country) {
        throw new Error("Please, select your country.");
      }
      if (await User.findOne({ email: email })) {
        throw new Error("Email already in use, try another one");
      }
      const pw = encryptPassword(password);
      // console.log("pase el email");
      const newUser = new User({
        first_name,
        last_name,
        email,
        password: pw,
        img,
        country,
      });
      await newUser.save();
      const token = jwt.sign({ ...newUser }, process.env.SECRETORKEY);
      res.json({
        success: true,
        user: { first_name: newUser.first_name, img: newUser.img, token },
      });
    } catch (err) {
      myError(res, err);
    }
  },

  getUsers: async (req, res) => {
    try {
      let response = await User.find();
      res.json({ success: true, response: response });
    } catch (err) {
      myError(res, err);
    }
  },

  updateUser: async (req, res) => {
    try {
      let user = await User.findOneAndUpdate(
        { _id: req.body.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified: user });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.body.id });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  logUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      let match = user && bcrypt.compareSync(password, user.password);
      if (!user || !match) {
        throw new Error();
      }
      const token = jwt.sign({ ...user }, process.env.SECRETORKEY);
      res.json({
        success: true,
        user: {
          first_name: user.first_name,
          img: user.img,
          token,
          id: user._id,
        },
      });
    } catch (err) {
      myError(res, err);
    }
  },

  verifyToken: async (req, res) => {
    jwt.verify(req.headers.token, process.env.SECRETORKEY, (err, result) => {
      if (err) {
        res.json({ success: false, response: "invalid token" });
      } else {
        if (result._doc._id === req.body.id) {
          res.json({ success: true });
        } else {
          res.json({
            success: false,
            response: "token and id doesn't match",
          });
        }
      }
    });
  },
};

module.exports = usersControllers;
