const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");

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
  .get(itinerariesControllers.readAllItineraies) //Read
  .delete(itinerariesControllers.deleteAllItineraries); //Delete
router
  .route("/itineraries/:id") //ITINERARIES BY CITY
  .post(itinerariesControllers.createItineraries) //Create
  .get(itinerariesControllers.readItineraries) //Read
  .delete(itinerariesControllers.deleteItineraries); //Delete
// .put(myTineraryControllers.updateItinerary)

router
  .route("/itinerary/:id") //SPECIFIC ITINERARY
  .post(itinerariesControllers.createItinerary) //Create
  .get(itinerariesControllers.readItinerary) //Read
  .put(itinerariesControllers.updateItinerary) //Update
  .delete(itinerariesControllers.deleteItinerary); //Delete

module.exports = router;
