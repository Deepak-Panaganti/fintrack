const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

// REGISTER USER
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  const hash = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users(username, password_hash, role) VALUES($1,$2,$3)",
    [username, hash, role]
  );

  res.json({ message: "User registered" });
});

// LOGIN USER
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const found = await pool.query("SELECT * FROM users WHERE username=$1", [
    username,
  ]);

  if (found.rowCount === 0)
    return res.status(400).json({ msg: "User not found" });

  const user = found.rows[0];
  const valid = await bcrypt.compare(password, user.password_hash);

  if (!valid) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "secret123",
    { expiresIn: "1d" }
  );

  res.json({ token });
});

module.exports = router;
