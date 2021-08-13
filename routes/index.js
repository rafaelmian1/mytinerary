const express = require("express");
const router = express.Router();
const myTineraryControllers = require("../controllers/myTineraryControllers");

router
  .route("/cities")
  .get(myTineraryControllers.readCities)
  .post(myTineraryControllers.createCity)
  .put(myTineraryControllers.updateCities);
router
  .route("/city/:id")
  .get(myTineraryControllers.readCity)
  .post(myTineraryControllers.updateCity)
  .delete(myTineraryControllers.deleteCity)
  .put(myTineraryControllers.updateCity);
router.route("/corousel/slides").get(myTineraryControllers.readCarouselSlides);

module.exports = router;
