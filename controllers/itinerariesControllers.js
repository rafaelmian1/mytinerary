const Itinerary = require("../models/Itinerary");

const myError = (res, err) => {
  res.json({ success: false, response: "Backend error \n" + err.message });
};

const itinerariesControllers = {
  // TOTAL ITINERARIES

  createAllItineraries: async (req, res) => {
    try {
      await Itinerary.insertMany(req.body.itineraries, { ordered: true });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readAllItineraies: async (req, res) => {
    try {
      let itineraries = await Itinerary.find();
      // .populate("city");
      if (itineraries.length !== 0) {
        res.json({ success: true, response: itineraries });
      } else {
        throw new Error();
      }
    } catch (err) {
      myError(res, err);
    }
  },

  updateAllItineraries: async (req, res) => {
    try {
      let itineraries = await Itinerary.updateMany(
        {},
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified: itineraries });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteAllItineraries: async (req, res) => {
    try {
      await Itinerary.deleteMany({});
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  // ITINERARIES BY CITY

  createItineraries: async (req, res) => {
    let data = req.body.itineraries.map((itinerary) => {
      return {
        ...itinerary,
        city: req.params.id,
      };
    });
    try {
      await Itinerary.insertMany(data, { ordered: true });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readItineraries: async (req, res) => {
    try {
      let itineraries = await Itinerary.find({ city: req.params.id }).populate({
        path: "comments",
        populate: {
          path: "user",
          model: "user",
          select: "first_name last_name img _id",
        },
      });
      res.json({ success: true, response: itineraries });
    } catch (err) {
      myError(res, err);
    }
  },

  updateItineraries: async (req, res) => {
    try {
      let itineraries = await Itinerary.updateMany(
        { city: req.params.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified: itineraries });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteItineraries: async (req, res) => {
    try {
      await Itinerary.deleteMany({ city: req.params.id });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  //SPECIFIC ITINERARY

  createItinerary: async (req, res) => {
    const { img, title, description, hashtags, price, duration } = req.body;
    try {
      const newItinerary = new Itinerary({
        img,
        user,
        title,
        description,
        hashtags,
        price,
        duration,
        city: req.params.id,
      });
      await newItinerary.save();
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readItinerary: async (req, res) => {
    try {
      let itinerary = await Itinerary.findOne({ _id: req.params.id });
      if (itinerary) {
        res.json({ success: true, response: itinerary });
      } else {
        throw new Error();
      }
    } catch (err) {
      myError(res, err);
    }
  },

  updateItinerary: async (req, res) => {
    try {
      let itinerary = await Itinerary.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified: itinerary });
    } catch (err) {
      myError(res, err);
    }
  },
  deleteItinerary: async (req, res) => {
    try {
      await Itinerary.findOneAndDelete({ _id: req.params.id });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },
};

module.exports = itinerariesControllers;
