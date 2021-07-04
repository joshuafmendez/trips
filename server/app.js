const express = require("express");

const app = express();
const tripsController = require("./controllers/tripsController");

app.use(express.json());

app.use("/api/v1/trips", tripsController);
// ROOT
app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

app.get("*", (req, res) => {
  res.status(404).json({ status: "failure", payload: "not found" });
});

module.exports = app;
