const City = require("../models/City");

const myError = (res, err) => {
  res.json({ success: false, response: "Backend error \n" + err.message });
};

const citiesControllers = {
  //CAROUSEL

  readCarouselSlides: async (req, res) => {
    try {
      let cities = await City.find();
      cities = cities.map((city) => {
        return { city: city.city, img: city.img, _id: city._id };
      });
      res.json({
        success: true,
        response: [cities.slice(0, 4), cities.slice(4, 8), cities.slice(8, 12)],
      });
    } catch (err) {
      myError(res, err);
    }
  },

  //ALL CITIES

  createCities: async (req, res) => {
    try {
      await City.insertMany(req.body.cities, { ordered: true });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readCities: async (req, res) => {
    try {
      let cities = await City.find();
      res.json({ success: true, response: cities });
    } catch (err) {
      myError(res, err);
    }
  },

  updateCities: async (req, res) => {
    try {
      let cities = await City.updateMany({}, { ...req.body }, { new: true });
      res.json({ success: true, modified: cities });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteCities: async (req, res) => {
    try {
      await City.deleteMany({});
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  // CITY

  createCity: async (req, res) => {
    try {
      const newCity = new City({
        city: capitalize(req.body.city),
        country: capitalize(req.body.country),
        img: req.body.img,
        description: req.body.description,
      });
      await newCity.save();
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },

  readCity: async (req, res) => {
    try {
      let city = await City.findOne({ _id: req.params.id });
      if (city) {
        res.json({ success: true, response: city });
      } else {
        throw new Error();
      }
    } catch (err) {
      myError(res, err);
    }
  },

  updateCity: async (req, res) => {
    try {
      let city = await City.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified: city });
    } catch (err) {
      myError(res, err);
    }
  },

  deleteCity: async (req, res) => {
    try {
      await City.findOneAndDelete({ _id: req.params.id });
      res.json({ success: true });
    } catch (err) {
      myError(res, err);
    }
  },
};

module.exports = citiesControllers;
