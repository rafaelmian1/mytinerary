const express = require("express");
const router = express.Router();
const myTineraryControllers = require("../controllers/myTineraryControllers");

router
  .route("/cities")
  .get(myTineraryControllers.readCities)
  .post(myTineraryControllers.createCities)
  .put(myTineraryControllers.updateCities)
  .delete(myTineraryControllers.deleteCities);
router
  .route("/city/:id")
  .get(myTineraryControllers.readCity)
  .post(myTineraryControllers.createCity)
  .put(myTineraryControllers.updateCity)
  .delete(myTineraryControllers.deleteCity);
router.route("/carousel").get(myTineraryControllers.readCarouselSlides);

module.exports = router;
