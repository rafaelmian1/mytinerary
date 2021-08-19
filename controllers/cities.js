const City = require("../models/City");

const myError = (res, err) => {
  res.json({ success: false, response: "Backend error \n" + err.message });
};

const citiesControllers = {
  //CAROUSEL

  readCarouselSlides: (req, res) => {
    City.find()
      .then((cities) => {
        cities = cities.map((city) => {
          return { city: city.city, img: city.img, _id: city._id };
        });
        res.json({
          success: true,
          response: [
            cities.slice(0, 4),
            cities.slice(4, 8),
            cities.slice(8, 12),
          ],
        });
      })
      .catch((err) => myError(res, err));
  },

  //ALL CITIES

  createCities: (req, res) => {
    City.insertMany(req.body.cities, { ordered: true })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  readCities: (req, res) => {
    City.find()
      .then((cities) => res.json({ success: true, response: cities }))
      .catch((err) => myError(res, err));
  },

  updateCities: (req, res) => {
    City.updateMany({}, { ...req.body }, { new: true })
      .then((cities) => res.json({ success: true, modified: cities }))
      .catch((err) => myError(res, err));
  },

  deleteCities: (req, res) => {
    City.deleteMany({ __v: 0 })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  // CITY

  createCity: (req, res) => {
    const newCity = new City({
      city: capitalize(req.body.city),
      country: capitalize(req.body.country),
      img: req.body.img,
      description: req.body.description,
    });
    newCity
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  readCity: (req, res) => {
    City.findOne({ _id: req.params.id })
      .then((city) => {
        if (city) {
          res.json({ success: true, response: city });
        } else {
          throw new Error();
        }
      })
      .catch((err) => myError(res, err));
  },

  updateCity: (req, res) => {
    City.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    )
      .then((city) => res.json({ success: true, modified: city }))
      .catch((err) => myError(res, err));
  },

  deleteCity: (req, res) => {
    City.findOneAndDelete({ _id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },
};

module.exports = citiesControllers;
