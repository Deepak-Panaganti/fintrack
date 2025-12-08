// server/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET users (minimal)
router.get("/users", async (req, res) => {
  try {
    const data = await pool.query("SELECT id, username, role FROM users ORDER BY id");
    res.json(data.rows);
  } catch (err) {
    console.error("Admin users error:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// GET audit logs (dummy / simple)
router.get("/logs", async (req, res) => {
  try {
    // return simple logs for prototype
    res.json([
      { id: 1, action: "User admin logged in", time: new Date() },
      { id: 2, action: "Invoice #1 created", time: new Date() }
    ]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

// GET integrations (mock)
router.get("/integrations", (req, res) => {
  res.json({ integrations: [{ name: "MockPayment", status: "active" }] });
});

module.exports = router;
