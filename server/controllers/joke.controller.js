// IMPORT MODEL
const Joke = require("../models/joke.model");

// CREATE
const createNewJoke = (req, res) => {
  console.log("CHECK OUT THAT BODY!", req.body);
  Joke.create(req.body)
    .then((newJoke) => {
      res.status(201).json(newJoke);
    })
    .catch((err) => {
      console.log("ERROR IN CREATE", err);
      req.status(400).json(err);
    });
};

// READ ALL
const findAllJokes = (req, res) => {
  Joke.find({})
    .then((jokes) => {
      res.json(jokes);
    })
    .catch((err) => {
      console.log("ERROR IN FIND ALL", err);
      req.status(400).json(err);
    });
};

// READ ONE
const findOneJoke = (req, res) => {
  Joke.findOne(req.params.id)
    .then((oneJoke) => {
      res.json(oneJoke);
    })
    .catch((err) => {
      console.log("ERROR IN FIND ONE JOKE", err);
      req.status(400).json(err);
    });
};

// UPDATE
const updateJoke = (req, res) => {
  Joke.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then((updateJoke) => {
      res.json(updateJoke);
    })
    .catch((err) => {
      console.log("ERROR IN UPDATE", err);
      req.status(400).json(err);
    });
};

// DELETE
const deleteJoke = (req, res) => {
  Joke.findOneAndDelete(req.params.id)
    .then((deleteJoke) => {
      res.json(deleteJoke);
    })
    .catch((err) => {
      console.log("ERROR IN DELETE", err);
      req.status(400).json(err);
    });
};

module.exports = {
  createNewJoke,
  findAllJokes,
  findOneJoke,
  updateJoke,
  deleteJoke,
};
