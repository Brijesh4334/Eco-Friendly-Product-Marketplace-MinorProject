const express = require("express");
const router = express.Router();
const Model = require("../models/contact");
const { model } = require("mongoose");

router.post("/add", (req, res) => {
  console.log(req.body);
  // storing data  to mongoDB
  // to add the data in database
  new Model(req.body)
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.get("/getall", (req, res) => {
  // empty brackets means get all data
  Model.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;