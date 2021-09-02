const express = require("express");
const adminRouter = express.Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const activitiesControllers = require("../controllers/activitiesControllers");
const usersControllers = require("../controllers/usersController");
const passport = require("passport");
const validator = require("../controllers/validator");

// CITIES ROUTES

adminRouter
  .route("/cities") //ALL CITIES
  .post(citiesControllers.createCities) //Create
  .get(citiesControllers.readCities) //Read
  .put(citiesControllers.updateCities) //Update
  .delete(citiesControllers.deleteCities); //Delete
adminRouter
  .route("/city/:id") //SPECIFIC CITY
  .post(citiesControllers.createCity) //Create
  .get(citiesControllers.readCity) //Read
  .put(citiesControllers.updateCity) //Update
  .delete(citiesControllers.deleteCity); //Delete

// ITINERARIES ROUTES

adminRouter
  .route("/itineraries") //TOTAL ITINERARIES
  .post(itinerariesControllers.createAllItineraries) //Create
  .get(itinerariesControllers.readAllItineraies) //Update
  .put(itinerariesControllers.updateAllItineraries) //Read
  .delete(itinerariesControllers.deleteAllItineraries); //Delete
adminRouter
  .route("/itineraries/:id") //ITINERARIES BY CITY
  .post(itinerariesControllers.createItineraries) //Create
  .get(itinerariesControllers.readItineraries) //Read
  .put(itinerariesControllers.updateItineraries) //Update
  .delete(itinerariesControllers.deleteItineraries); //Delete

adminRouter
  .route("/itinerary/:id") //SPECIFIC ITINERARY
  .post(itinerariesControllers.createItinerary) //Create
  .get(itinerariesControllers.readItinerary) //Read
  .put(itinerariesControllers.updateItinerary) //Update
  .delete(itinerariesControllers.deleteItinerary); //Delete

// ACTIVITIES ROUTES

adminRouter
  .route("/activities") //TOTAL ACTIVITIES
  .post(activitiesControllers.createAllActivities) //Create
  .get(activitiesControllers.readAllActivities) //Update
  .put(activitiesControllers.updateAllActivities) //Read
  .delete(activitiesControllers.deleteAllActivities); //Delete
adminRouter
  .route("/activities/:id") //ACTIVITIES BY ITINERARY
  .post(activitiesControllers.createActivities) //Create
  .get(activitiesControllers.readActivities) //Read
  .put(activitiesControllers.updateActivities) //Update
  .delete(activitiesControllers.deleteActivities); //Delete
adminRouter
  .route("/activity/:id") //SPECIFIC ACTIVITY
  .post(activitiesControllers.createActivity) //Create
  .get(activitiesControllers.readActivity) //Read
  .put(activitiesControllers.updateActivity) //Update
  .delete(activitiesControllers.deleteActivity); //Delete

//USERS ROUTES
adminRouter
  .route("/users") //ALL USERS
  .get(usersControllers.getUsers) //Read
  .put(usersControllers.updateUser) //Update
  .delete(usersControllers.deleteUser); //Delete

module.exports = adminRouter;
