const City = require("../models/City");
const Itinerary = require("../models/Itinerary");

const myError = (res, err) => {
  res.json({ success: false, response: "Backend error \n" + err.message });
};

const itinerariesControllers = {
  // TOTAL ITINERARIES

  readAllItineraies: (req, res) => {
    Itinerary.find()
      .then((itineraries) => {
        if (itineraries) {
          // City.populate(itineraries, { path: "city" }, () =>
          res.json({ success: true, response: itineraries });
          // );
        } else {
          throw new Error();
        }
      })
      .catch((err) => myError(res, err));
  },

  deleteAllItineraries: (req, res) => {
    Itinerary.deleteMany({})
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  // ITINERARIES BY CITY

  createItineraries: (req, res) => {
    Itinerary.insertMany(req.body.itineraries, { ordered: true })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  readItineraries: (req, res) => {
    console.log("me pegaron");
    Itinerary.find({ city: req.params.id })
      .then((itineraries) => {
        if (itineraries) {
          City.populate(itineraries, { path: "city" }, () =>
            res.json({ success: true, response: itineraries })
          );
        } else {
          throw new Error();
        }
      })
      .catch((err) => myError(res, err));
  },

  updateItineraries: (req, res) => {
    Itinerary.updateMany(
      { city: req.params.id },
      { ...req.body },
      { new: true }
    )
      .then((itineraries) => res.json({ success: true, modified: itineraries }))
      .catch((err) => myError(res, err));
  },

  deleteItineraries: (req, res) => {
    Itinerary.deleteMany({ city: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  //SPECIFIC ITINERARY

  createItinerary: (req, res) => {
    const newItinerary = new Itinerary({
      img: req.body.img,
      user: req.body.user,
      description: req.body.description,
      hashtags: req.body.hashtags,
      price: req.body.price,
      duration: req.body.duration,
      city: req.params.id,
    });
    newItinerary
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  readItinerary: (req, res) => {
    Itinerary.findOne({ _id: req.params.id })
      .then((itinerary) => {
        if (itinerary) {
          res.json({ success: true, response: itinerary });
        } else {
          throw new Error();
        }
      })
      .catch((err) => myError(res, err));
  },

  updateItinerary: (req, res) => {
    Itinerary.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    )
      .then((itinerary) => res.json({ success: true, modified: itinerary }))
      .catch((err) => myError(res, err));
  },
  deleteItinerary: (req, res) => {
    Itinerary.findOneAndDelete({ _id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },
};

module.exports = itinerariesControllers;
