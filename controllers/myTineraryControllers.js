const City = require("../models/City");

const myError = (res, err) => {
  console.log("Database error \n" + err);
  res.json({ success: false, response: "Backend error \n" + err.message });
};

const capitalize = (string) =>
  string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
    .join(" ");

const myTineraryControllers = {
  readCarouselSlides: (req, res) => {
    City.find()
      .then((cities) => {
        cities = cities.map((city) => {
          return { city: city.city, img: city.img };
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

  readCities: (req, res) => {
    City.find()
      .then((cities) => res.json({ success: true, response: cities }))
      .catch((err) => myError(res, err));
  },

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

  // createCities: (req, res) => {
  //   console.log(req.body);
  //   req.body.cities.forEach((city) => {
  //     const newCity = new City({
  //       city: capitalize(city.city),
  //       country: capitalize(city.country),
  //       img: city.img,
  //       description: city.description,
  //     });
  //     newCity
  //       .save()
  //       .then(() => res.json({ success: true }))
  //       .catch((err) => myError(res, err));
  //   });
  // },

  deleteCities: (req, res) => {
    City.deleteMany({ __v: 0 })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  deleteCity: (req, res) => {
    City.findOneAndDelete({ _id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((err) => myError(res, err));
  },

  updateCity: (req, res) => {
    City.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
      .then((city) => res.json({ success: true, modified: city }))
      .catch((err) => myError(res, err));
  },

  updateCities: (req, res) => {
    City.updateMany({}, { ...req.body })
      .then((cities) => res.json({ success: true, modified: cities }))
      .catch((err) => myError(res, err));
  },

  readCity: (req, res) => {
    City.findOne({ _id: req.params.id })
      .then((city) => res.json({ success: true, response: city }))
      .catch((err) => myError(res, err));
  },
};

module.exports = myTineraryControllers;
