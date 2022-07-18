const { Vehicle } = require("../models/vehicleModel");
const prompt = require("prompt-sync")();
const file = require("fs");

//Constant results
const canCirculateAdvise = "Puede circular";
const canNotCirculateAdvise = "No puede circular";

//Function to get the vehicle data from the user
const requestVehicleData = () => {
  const id = autoIncrementalIdFromTxt();
  const licencePlateNumber = prompt("Licence Plate Number: ");
  return { id, licencePlateNumber };
};

//Function to get date and time from the user
const requestDateAndTimeData = () => {
  const date = prompt("Date (DD/MM/YYYY): ");
  const time = prompt("Time: (HH:MM) ");
  return { date, time };
};
