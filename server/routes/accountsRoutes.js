// server/routes/accountsRoutes.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// List accounts
router.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM accounts ORDER BY id");
    res.json(data.rows);
  } catch (err) {
    console.error("Accounts fetch error:", err);
    res.status(500).json({ error: "Failed to fetch accounts" });
  }
});

// Create account
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name required" });

    await pool.query("INSERT INTO accounts(name) VALUES($1)", [name]);
    res.json({ message: "Account added" });
  } catch (err) {
    console.error("Add account error:", err);
    res.status(500).json({ error: "Failed to add account" });
  }
});

module.exports = router;
