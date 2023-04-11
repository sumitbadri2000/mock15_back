const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    Name: String,
    Email_Address: String,
    Destination: String,
    No_travellers: Number,
    Budget: Number,
  },
  {
    versionKey: false,
  }
);

const DataModel = mongoose.model("data", dataSchema);

module.exports = { DataModel };
