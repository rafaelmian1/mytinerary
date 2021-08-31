const Activity = require("../models/Activity");

const myError = (res, err) => {
  res.json({ success: false, response: err.message });
};

const activitiesControllers = {
  // ALL ACTIVITIES

  createAllActivities: async (req, res) => {
    const { activities } = req.body;
    try {
      await Activity.insertMany(activities, { ordered: true });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readAllActivities: async (req, res) => {
    try {
      let response = await Activity.find();
      res.json({ success: true, response });
    } catch (err) {
      myError(res, err);
    }
  },

  updateAllActivities: async (req, res) => {
    try {
      let modified = await Activity.updateMany(
        {},
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteAllActivities: async (req, res) => {
    try {
      await Activity.deleteMany({});
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  // ACTIVITIES BY ITINERARY

  createActivities: async (req, res) => {
    let data = req.body.activities.map((activity) => {
      return {
        ...activity,
        itinerary: req.params.id,
      };
    });
    try {
      await Activity.insertMany(data, { ordered: true });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readActivities: async (req, res) => {
    try {
      let response = await Activity.find({
        itinerary: req.params.id,
      });
      if (response.length === 0) throw new Error();
      // .populate({
      //   path: "itinerary",
      //   model: "itinerary",
      //   populate: { path: "city", model: "city" },
      // })
      res.json({ success: true, response });
    } catch (err) {
      myError(res, err);
    }
  },

  updateActivities: async (req, res) => {
    try {
      let modified = await Activity.updateMany(
        { itinerary: req.params.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteActivities: async (req, res) => {
    try {
      await Activity.deleteMany({ itinerary: req.params.id });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  // SPECIFIC ACTIVITY

  createActivity: async (req, res) => {
    const { img, name, description } = req.body;
    try {
      const newActivity = new Activity({
        img,
        name,
        description,
        itinerary: req.params.id,
      });
      await newActivity.save();
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readActivity: async (req, res) => {
    try {
      let response = await Activity.findOne({ _id: req.params.id });
      res.json({ success: true, response });
    } catch (err) {
      myError(res, err);
    }
  },

  updateActivity: async (req, res) => {
    try {
      let modified = await Activity.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteActivity: async (req, res) => {
    try {
      await Activity.findOneAndDelete({ _id: req.params.id });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },
};

module.exports = activitiesControllers;
