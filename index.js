require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Appointmentmodel = require("./model/appointment");
const FeedbackModel = require("./model/feedbackForm");

const server = express();
const mongodbUri = process.env.MONGODB_URI;

server.use(express.json());
server.use(cors());

mongoose.connect(mongodbUri);

server.get("/", (req, res) => {
  res.send("Home route test");
});

// contactus form route
server.post("/appointment", async (req, res) => {
  try {
    const { name, mobileNo, email, date } = req.body;
    const appointmentdata = await Appointmentmodel.create({
      name,
      mobileNo,
      email,
      date,
    });

    res.status(201).json(appointmentdata);
  } catch (err) {
    res.status(500).json("Internal server Error");
  }
});


change
// feedback form route
server.post("/feedback", async (req, res) => {
  try {
    const { name, suggetions, rating, therapyNames } = req.body;
    const feedbackData = await FeedbackModel.create({
      name,
      suggetions,
      rating,
      therapyNames,
    });

    res.status(201).json(feedbackData);
  } catch (err) {
    res.status(500).json("Internal server Error");
  }
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
