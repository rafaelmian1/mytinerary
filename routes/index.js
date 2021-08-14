const express = require("express");
const router = express.Router();
const myTineraryControllers = require("../controllers/myTineraryControllers");

router
  .route("/cities")
  .get(myTineraryControllers.readCities)
  // .post(myTineraryControllers.createCities)
  .post(myTineraryControllers.createCity)
  .put(myTineraryControllers.updateCities)
  .delete(myTineraryControllers.deleteCities);
router
  .route("/city/:id")
  .get(myTineraryControllers.readCity)
  .delete(myTineraryControllers.deleteCity)
  .put(myTineraryControllers.updateCity);
router.route("/carousel").get(myTineraryControllers.readCarouselSlides);

module.exports = router;
