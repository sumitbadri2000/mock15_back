const express = require("express");
const { DataModel } = require("../model/data.model");

const dataRouter = express.Router();

dataRouter.get("/", async (req, res) => {
  const datas = await DataModel.find();
  res.send(datas);
});

dataRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const data = new DataModel(payload);
    await data.save();
    res.send({ msg: "create data add" });
  } catch (error) {
    res.send({ msg: "something wrong", error: error.message });
  }
});

module.exports = { dataRouter };
