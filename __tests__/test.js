const { calculatePicoyPlaca } = require("../controllers/vehicleController");

/*Unit tests are given as follows:
Case 1: When the last number of the license plate coincides with the day and time of the restriction.
Case 2: When the last number of the license plate does not coincide only with the time of the restriction.
Case 3: When the last number of the license plate does not coincide with the day and time of the restriction.
*/
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
