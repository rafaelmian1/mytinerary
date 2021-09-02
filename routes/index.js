const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const activitiesControllers = require("../controllers/activitiesControllers");
const usersControllers = require("../controllers/usersController");
const passport = require("passport");
const validator = require("../controllers/validator");

// CAROUSEL (POPULAR CITIES)

router.route("/carousel").get(citiesControllers.readCarouselSlides); //Read

// CITIES ROUTES

router
  .route("/cities") //ALL CITIES
  .get(citiesControllers.readCities); //Read
router
  .route("/city/:id") //SPECIFIC CITY
  .get(citiesControllers.readCity); //Read

// ITINERARIES ROUTES

router
  .route("/itineraries/:id") //ITINERARIES BY CITY
  .get(itinerariesControllers.readItineraries); //Read

// ACTIVITIES ROUTES

router
  .route("/activities/:id") //ACTIVITIES BY ITINERARY
  .get(activitiesControllers.readActivities); //Read

// USERS ROUTES

// POST: SIGN UP AND LOGIN

router.route("/user/signup").post(validator, usersControllers.createUser);
router.route("/user/login").post(usersControllers.logUser);

// VERIFY TOKEN
router
  .route("/user/token")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersControllers.verifyToken
  );

//GET ID

router
  .route("/user/id")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersControllers.getId
  );
// LIKE
router
  .route("/user/like")
  .put(passport.authenticate("jwt", { session: false }), usersControllers.like);

// COMMENT
router
  .route("/user/comment")
  .put(
    passport.authenticate("jwt", { session: false }),
    usersControllers.comment
  );

module.exports = router;
