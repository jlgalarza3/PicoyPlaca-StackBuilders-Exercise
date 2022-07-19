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

//Function to get the date from the user
const requestDate = () => {
  const date = prompt("Date (MM/DD/YYYY): ");
  if (!validateDateFormat(date)) {
    console.log("Invalid date");
    return requestDate();
  }
  return date;
};

//Function to get the time from the user
const requestTime = () => {
  const time = prompt("Time (hh:mm): ");
  if (!validateTimeFormat(time)) {
    console.log("Invalid Time");
    return requestTime();
  }
  return time;
};

//Function to validate the date format
const validateDateFormat = (date) => {
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  return dateRegex.test(date);
};

//Function to validate the time format
const validateTimeFormat = (time) => {
  const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
  return timeRegex.test(time);
};

//Function to create a vehicle Object
const createVehicle = () => {
  const { id, licencePlateNumber } = requestVehicleData();
  const vehicle = new Vehicle(id, licencePlateNumber);
  return vehicle;
};

//Function to autoincremental the id of the objects
const autoIncrementalIdFromTxt = () => {
  if (validateEmptyFile()) {
    return 1;
  } else {
    const vehicles = file.readFileSync("vehiclesLog.txt", "utf8");
    const vehiclesArray = vehicles.split("\n");
    const lastVehicle = vehiclesArray[vehiclesArray.length - 2];
    const lastVehicleArray = lastVehicle.split(" ");
    const lastVehicleId = parseInt(lastVehicleArray[0]);
    return lastVehicleId + 1;
  }
};

//Function to validate if the txt file is empty
const validateEmptyFile = () => {
  const vehicles = file.readFileSync("vehiclesLog.txt", "utf8");
  if (vehicles === "") {
    return true;
  }
  return false;
};

//Function to save Vehicle id and licencePlateNumber on txt file
const saveVehicleOnTxt = (vehicle) => {
  file.appendFileSync(
    "vehiclesLog.txt",
    `${vehicle.id} ${vehicle.licencePlateNumber}\n`
  );
};

//Function to get the day of the week from the date
const getDayOfTheWeekFromDate = (date) => {
  const dateTime = new Date(date);
  return dateTime.getDay();
};

//Function to get the last licencePlateNumber of the vehicle
const getLastLicencePlateNumber = (licencePlateNumber) => {
  const lastLicencePlateNumber = licencePlateNumber.slice(-1);
  return lastLicencePlateNumber;
};

//Function to validate if the vehicle is in the "Pico y Placa" time interval
const vehicleIsInTimeInterval = (time) => {
  if (
    (time >= "08:00" && time <= "09:30") ||
    (time >= "16:00" && time <= "18:30")
  ) {
    return canNotCirculateAdvise;
  } else {
    return canCirculateAdvise;
  }
};

//Function for calculating "Pico y placa" according the day of the week
const calculatePicoyPlaca = (
  licencePlateNumber,
  dateRequesed,
  timeRequesed
) => {
  const dayOfTheWeek = getDayOfTheWeekFromDate(dateRequesed);
  const lastLicencePlateNumber = getLastLicencePlateNumber(licencePlateNumber);

  //Day of the week: 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
  if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    return canCirculateAdvise;
  } else {
    switch (dayOfTheWeek) {
      case 1:
        return lastLicencePlateNumber === "1" || lastLicencePlateNumber === "2"
          ? vehicleIsInTimeInterval(timeRequesed)
          : canCirculateAdvise;
      case 2:
        return lastLicencePlateNumber === "3" || lastLicencePlateNumber === "4"
          ? vehicleIsInTimeInterval(timeRequesed)
          : canCirculateAdvise;
      case 3:
        return lastLicencePlateNumber === "5" || lastLicencePlateNumber === "6"
          ? vehicleIsInTimeInterval(timeRequesed)
          : canCirculateAdvise;
      case 4:
        return lastLicencePlateNumber === "7" || lastLicencePlateNumber === "8"
          ? vehicleIsInTimeInterval(timeRequesed)
          : canCirculateAdvise;
      case 5:
        return lastLicencePlateNumber === "9" || lastLicencePlateNumber === "0"
          ? vehicleIsInTimeInterval(timeRequesed)
          : canCirculateAdvise;
    }
  }
};

//Union of functions and return of the result
const getResult = () => {
  const vehicleCreated = createVehicle();
  const dateRequesed = requestDate();
  const timeRequesed = requestTime();
  saveVehicleOnTxt(vehicleCreated);

  const result = calculatePicoyPlaca(
    vehicleCreated.licencePlateNumber,
    dateRequesed,
    timeRequesed
  );
  console.log(result);
  return result;
};

getResult();
