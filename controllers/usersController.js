const User = require("../models/User");
const Itinerary = require("../models/Itinerary");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const myError = (res, err) => {
  res.json({ success: false, response: err.message });
};

const usersControllers = {
  createUser: async (req, res) => {
    const { first_name, last_name, email, password, img, country, google } =
      req.body;
    const encryptPassword = (password) => bcrypt.hashSync(password);
    try {
      if (await User.findOne({ email: email })) {
        throw new Error("Email already in use, try another one");
      }
      const pw = encryptPassword(password);
      const newUser = new User({
        first_name,
        last_name,
        email,
        password: pw,
        img,
        country,
        google,
      });
      await newUser.save();
      const token = jwt.sign({ ...newUser }, process.env.SECRETORKEY, {
        expiresIn: "1h",
      });
      res.json({
        success: true,
        user: {
          first_name: newUser.first_name,
          img: newUser.img,
          liked: newUser.liked,
          token,
        },
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
    const { email, password, google } = req.body;
    try {
      let user = await User.findOne({ email: email });
      console.log(user);
      if (user.google && !google)
        throw new Error("You must log in with Google");
      let match = user && bcrypt.compareSync(password, user.password);
      if (!user || !match) throw new Error();
      const token = jwt.sign({ ...user }, process.env.SECRETORKEY, {
        expiresIn: 3600,
      });
      res.json({
        success: true,
        user: {
          first_name: user.first_name,
          img: user.img,
          liked: user.liked,
          token,
        },
      });
    } catch (err) {
      myError(res, err);
    }
  },

  verifyToken: async (req, res) => {
    res.json({ success: true });
  },

  itineraryLiked: async (req, res) => {
    const { bool, id, token } = req.body;
    try {
      await Itinerary.findOneAndUpdate(
        { _id: id },
        bool ? { $inc: { likes: 1 } } : { $inc: { likes: -1 } },
        { new: true }
      );
      let user = await User.findOneAndUpdate(
        { _id: req.user._id },
        bool ? { $push: { liked: id } } : { $pull: { liked: id } },
        { new: true }
      );

      res.json({
        success: true,
        user: {
          first_name: user.first_name,
          img: user.img,
          liked: user.liked,
          token,
        },
      });
    } catch (err) {
      myError(res, err);
    }
  },
};

module.exports = usersControllers;
