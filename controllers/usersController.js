const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const myError = (res, err) => {
  res.json({ success: false, response: err.message });
};

const usersControllers = {
  createUser: async (req, res) => {
    const { first_name, last_name, email, password, img, country } = req.body;
    const encryptPassword = (password) => bcrypt.hashSync(password);
    try {
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
      const token = jwt.sign({ ...newUser }, process.env.SECRETORKEY, {
        expiresIn: "1h",
      });
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
      const token = jwt.sign({ ...user }, process.env.SECRETORKEY, {
        expiresIn: "1h",
      });
      res.json({
        success: true,
        user: {
          first_name: user.first_name,
          img: user.img,
          token,
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
        if (User.findOne({ _id: result._doc._id })) {
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
