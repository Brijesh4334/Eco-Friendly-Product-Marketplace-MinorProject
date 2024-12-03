const express = require("express");
const router = express.Router();
const Model = require("../models/product");
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
router.get('/getbyid/:id',(req,res) => {
  // empty brackets will give all the data from the database
  console.log(req.params.id)
  Model.findById(req.params.id)
  .then((result) => {
      res.json(result)
  }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
  }); 
});
module.exports = router;