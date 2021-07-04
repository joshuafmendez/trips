const trips = require("express").Router();
const db = require("../db");

// GET ALL
trips.get("/", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM trips");
    res.status(200).json({
      status: "success",
      results: rows.length,
      data: { trips: rows },
    });
  } catch (err) {
    console.log(err);
  }
});

// GET by id
trips.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query("SELECT * FROM trips WHERE id = $1", [id]);
    if (rows[0]?.id === id) {
      res.json({
        status: "success",
        data: { trip: rows[0] },
      });
    } else {
      res.status(302).redirect("/404");
    }
  } catch (err) {
    console.log(err);
  }
});

// CREATE
trips.post("/", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const { rows } = await db.query(
      "INSERT INTO trips (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [name, location, price_range]
    );
    res.status(201).json({
      status: "success",
      data: { trip: rows[0] },
    });
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

// UPDATE by id
trips.put("/:id", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const { id } = req.params;
    const { rows } = await db.query(
      "UPDATE trips SET name=$1, location=$2, price_range=$3 WHERE id = $4 RETURNING *",
      [name, location, price_range, id]
    );
    if (rows[0]?.id === id) {
      res.status(200).json({
        status: "success",
        data: { trip: rows[0] },
      });
    } else {
      res.status(404).json({ status: "failed", data: "Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});

// DELETE by id
trips.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(
      "DELETE FROM trips WHERE id = $1 RETURNING *",
      [id]
    );
    if (rows[0]?.id === id) {
      res.status(200).json({
        status: "success",
        data: { trip: rows[0] },
      });
    } else {
      res.status(404).json({ status: "failed", data: "Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = trips;
