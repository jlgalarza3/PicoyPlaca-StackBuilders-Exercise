/*
author: Jorge Galarza
*/
const { getResult } = require("./controllers/vehicleController");
const { vehicleView } = require("./views/vehicleView");

const main = () => {
  const result = getResult();
  vehicleView(result);
};

main();
