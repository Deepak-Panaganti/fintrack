// server/routes/vendorsRoutes.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Vendors
router.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM vendors ORDER BY id");
    res.json(data.rows);
  } catch (err) {
    console.error("Vendors fetch error:", err);
    res.status(500).json({ error: "Failed to fetch vendors" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name required" });
    await pool.query("INSERT INTO vendors(name) VALUES($1)", [name]);
    res.json({ message: "Vendor added" });
  } catch (err) {
    console.error("Add vendor error:", err);
    res.status(500).json({ error: "Failed to add vendor" });
  }
});

// Customers
router.get("/customers", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM customers ORDER BY id");
    res.json(data.rows);
  } catch (err) {
    console.error("Customers fetch error:", err);
    res.status(500).json({ error: "Failed to fetch customers" });
  }
});

router.post("/customers", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name required" });
    await pool.query("INSERT INTO customers(name) VALUES($1)", [name]);
    res.json({ message: "Customer added" });
  } catch (err) {
    console.error("Add customer error:", err);
    res.status(500).json({ error: "Failed to add customer" });
  }
});

module.exports = router;
