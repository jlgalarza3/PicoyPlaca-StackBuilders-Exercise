const { calculatePicoyPlaca } = require("../controllers/vehicleController");

// ------------------------ Testing calculatePicoyPlaca Function --------------------------- //

/*Unit tests are given as follows:
Case 1: When the last number of the license plate coincides with the day and time of the restriction.
Case 2: When the last number of the license plate coincides only with the day of the restriction.
Case 3: When the last number of the license plate does not coincide with the day and time of the restriction.
*/

// Must return the correct message on monday cases
const mondayCases = [
  ["PBC-8731", "07/18/2022", "08:30", "Can not circulate"],
  ["PBC-8732", "07/18/2022", "10:30", "Can circulate"],
  ["PBC-8733", "07/18/2022", "08:30", "Can circulate"],
];
describe("Monday cases with licence plate number 1-2", () => {
  test.each(mondayCases)(
    "Given the vehicle with licence plate number %p at %p at %p, the vehicle: %p",
    (firstArg, secondArg, thirdArg, expectedResult) => {
      const result = calculatePicoyPlaca(firstArg, secondArg, thirdArg);
      expect(result).toEqual(expectedResult);
    }
  );
});

// Must return the correct message on tuesday cases
const tuesdayCases = [
  ["PBC-8733", "07/19/2022", "09:30", "Can not circulate"],
  ["PBC-8734", "07/19/2022", "10:30", "Can circulate"],
  ["PBC-8739", "07/19/2022", "09:30", "Can circulate"],
];
describe("Tuesday cases with licence plate number 3-4", () => {
  test.each(tuesdayCases)(
    "Given the vehicle with licence plate number %p at %p at %p, the vehicle: %p",
    (licencePlateNumber, date, time, expectedResult) => {
      const result = calculatePicoyPlaca(licencePlateNumber, date, time);
      expect(result).toEqual(expectedResult);
    }
  );
});

// Must return the correct message on wednesday cases
const wednesdayCases = [
  ["PBC-8735", "07/20/2022", "16:30", "Can not circulate"],
  ["PBC-8736", "07/20/2022", "10:30", "Can circulate"],
  ["PBC-8737", "07/20/2022", "19:00", "Can circulate"],
];
describe("Wednesday cases with licence plate number 5-6", () => {
  test.each(wednesdayCases)(
    "Given the vehicle with licence plate number %p at %p at %p, the vehicle: %p",
    (licencePlateNumber, date, time, expectedResult) => {
      const result = calculatePicoyPlaca(licencePlateNumber, date, time);
      expect(result).toEqual(expectedResult);
    }
  );
});
