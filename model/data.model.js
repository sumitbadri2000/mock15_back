const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    destination: String,
    travel: Number,
    budget: Number,
  },
  {
    versionKey: false,
  }
);

const DataModel = mongoose.model("data", dataSchema);

module.exports = { DataModel };
