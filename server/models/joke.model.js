const mongoose = require("mongoose");

// DEFINE SCHEMA
const JokeSchema = mongoose.Schema(
  {
    joke: String,
  },
  {
    timestamps: true,
  }
);

// REGISTER SCHEMA
module.exports = mongoose.model("Joke", JokeSchema);
