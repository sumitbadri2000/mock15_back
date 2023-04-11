const express = require("express");
const { connection } = require("./db");
const { dataRouter } = require("./routes/data.routes");

const app = express();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Home_Page");
});

app.use("/data", dataRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("server 8080");
  } catch (error) {
    console.log(error);
  }

  console.log("8080");
});
