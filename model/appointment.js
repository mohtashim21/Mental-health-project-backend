const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

const Appointmentmodel = mongoose.model("contactus", appointmentSchema);
module.exports = Appointmentmodel;
