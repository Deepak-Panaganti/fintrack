const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// ========================
// FIXED DASHBOARD API
// ========================
router.get("/", async (req, res) => {
  try {
    // Basic KPIs
    const totalProjects = await pool.query("SELECT COUNT(*) FROM projects");
    const totalInvoices = await pool.query("SELECT COUNT(*) FROM invoices");
    const pendingPayments = await pool.query(
      "SELECT COUNT(*) FROM invoices WHERE status='Pending'"
    );

    // ----------------------
    // GET BUDGET + SPENT
    // ----------------------
    const proj = await pool.query(
      "SELECT budget, spent FROM projects ORDER BY id LIMIT 1"
    );

    let budget = 0;
    let spent = 0;

    if (proj.rows.length > 0) {
      budget = Number(proj.rows[0].budget);
      spent = Number(proj.rows[0].spent);
    }

    return res.json({
      total_projects: totalProjects.rows[0].count,
      total_invoices: totalInvoices.rows[0].count,
      pending_payments: pendingPayments.rows[0].count,
      budget,
      spent
    });
  } catch (err) {
    console.error("Dashboard API Error:", err);
    res.status(500).json({ error: "Dashboard API failed" });
  }
});

module.exports = router;
