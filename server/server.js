// IMPORT DEPENDENCIES
const express = require("express");

// INSTANTIATE AN EXPRESS SERVER
const app = express();
const PORT = 8000;

// START MONGOOSE CONFIG fires mongoose.connect to initialize db connection
require("./config/mongoose.config");

// MIDDLEWARE *BEFORE ROUTES
// important for req.body or undefined
// ALLOWING USE OF JSON
app.use(express.json());
// ALLOWING USE OF POST REQUEST INFO
app.use(express.urlencoded({ extended: true }));

// DEFINE API ENDPOINTS import jokes routes function from joke.routes.js
const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);

// RUN EXPRESS SERVER
app.listen(PORT, () => {
  console.log(`Server Is Ready to Boogie On PORT ${PORT}`);
});
