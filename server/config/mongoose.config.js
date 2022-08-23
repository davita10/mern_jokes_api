// IMPORT MONGOOSE
const mongoose = require("mongoose");
const MONGOURI = "mongodb://localhost/jokes_api_db";

mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("CONNECTED TO THE DB");
  })
  .catch((err) => {
    console.log("ERROR IN DB CONNECTION", err.message);
  });
