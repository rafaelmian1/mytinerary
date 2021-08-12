const express = require("express");
const router = express.Router();
const myTineraryControllers = require("../controllers/myTineraryControllers");

router
  .route("/cities")
  .get(myTineraryControllers.getCities)
  .post(myTineraryControllers.postCities);
router.route("/city/:id").get(myTineraryControllers.getCity);
router.route("/corousel/slides").get(myTineraryControllers.getCarouselSlides);

module.exports = router;
