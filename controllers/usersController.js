const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validate = require("./validators");

const myError = (res, err) => {
  res.json({ success: false, response: "Backend error. " + err.message });
};

const usersControllers = {
  createUser: async (req, res) => {
    const { first_name, last_name, email, password, img, country } = req.body;
    const pw = bcrypt.hashSync(password);
    const ok =
      validate.name(first_name) &&
      validate.name(last_name) &&
      validate.email(email) &&
      img.includes(".");
    try {
      if (!ok) {
        throw new Error("Complete all the fields");
      }
      if (await User.findOne({ email: email })) {
        throw new Error("User already in use");
      }
      // console.log("pase el email");
      await new User({
        first_name,
        last_name,
        email,
        password: pw,
        img,
        country,
      }).save();
      res.json({ success: true });
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
      // let user = await User.exists({ email: email });
      let user = await User.findOne({ email: email });
      let match = user && bcrypt.compareSync(password, user.password);
      if (!user || !match) {
        throw new Error("Incorrect");
      }
      res.json({ success: true, user: user });
    } catch (err) {
      myError(res, err);
    }
  },
};

module.exports = usersControllers;
