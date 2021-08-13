const City = require("../models/City");
const myTineraryControllers = {
  readCarouselSlides: (req, res) => {
    City.find()
      .then((cities) => {
        res.json({
          response: [
            cities.slice(0, 4),
            cities.slice(4, 8),
            cities.slice(8, 12),
          ],
        });
      })
      .catch((err) => res.json({ success: false, error: err }));
  },

  readCities: (req, res) => {
    City.find()
      .then((cities) => res.json({ response: cities }))
      .catch((err) => res.json({ success: false, error: err }));
  },

  createCity: (req, res) => {
    const newCity = new City({
      ciudad: req.body.ciudad,
      img: req.body.img,
      descripcion: req.body.descripcion,
    });
    newCity
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },

  deleteCity: (req, res) => {
    City.findOneAndDelete({ _id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },

  updateCity: (req, res) => {
    City.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },

  updateCities: (req, res) => {
    City.updateMany({}, { ...req.body })
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },

  readCity: (req, res) => {
    City.findOne({ _id: req.params.id })
      .then((city) =>
        res.json({
          response: city,
        })
      )
      .catch((err) => res.json({ success: false, error: err }));
  },
};

module.exports = myTineraryControllers;
