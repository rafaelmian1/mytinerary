const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersController");

//CAROUSEL (POPULAR CITIES)

router.route("/carousel").get(citiesControllers.readCarouselSlides); //Read

//CITIES ROUTES

router
  .route("/cities") //ALL CITIES
  .post(citiesControllers.createCities) //Create
  .get(citiesControllers.readCities) //Read
  .put(citiesControllers.updateCities) //Update
  .delete(citiesControllers.deleteCities); //Delete
router
  .route("/city/:id") //SPECIFIC CITY
  .post(citiesControllers.createCity) //Create
  .get(citiesControllers.readCity) //Read
  .put(citiesControllers.updateCity) //Update
  .delete(citiesControllers.deleteCity); //Delete

//ITINERARIES ROUTES

router
  .route("/itineraries") //TOTAL ITINERARIES
  .post(itinerariesControllers.createAllItineraries) //Create
  .get(itinerariesControllers.readAllItineraies) //Update
  .put(itinerariesControllers.updateAllItineraries) //Read
  .delete(itinerariesControllers.deleteAllItineraries); //Delete
router
  .route("/itineraries/:id") //ITINERARIES BY CITY
  .post(itinerariesControllers.createItineraries) //Create
  .get(itinerariesControllers.readItineraries) //Read
  .put(itinerariesControllers.updateItineraries) //Update
  .delete(itinerariesControllers.deleteItineraries); //Delete

router
  .route("/itinerary/:id") //SPECIFIC ITINERARY
  .post(itinerariesControllers.createItinerary) //Create
  .get(itinerariesControllers.readItinerary) //Read
  .put(itinerariesControllers.updateItinerary) //Update
  .delete(itinerariesControllers.deleteItinerary); //Delete

//USERS ROUTES
router
  .route("/users")
  .get(usersControllers.getUsers)
  .put(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);
router.route("/user/signup").post(usersControllers.createUser);
router.route("/user/login").post(usersControllers.logUser);
router.route("/user/token").post(usersControllers.verifyToken);

module.exports = router;
