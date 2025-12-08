// server/routes/insightRoutes.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db");


// ===============================================
// 1️⃣ AI RISK SCORE
// ===============================================
router.get("/risk/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;

    const result = await pool.query(
      "SELECT * FROM projects WHERE id=$1",
      [projectId]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ error: "Project not found" });

    const p = result.rows[0];
    let risk = 0;

    // Rule 1: Budget Overrun
    if (p.spent > p.budget) risk += 40;

    // Rule 2: Progress Behind Schedule
    if (p.progress < 50) risk += 20;

    // Risk Levels
    let riskLevel = "Low";
    if (risk >= 60) riskLevel = "High";
    else if (risk >= 30) riskLevel = "Medium";

    res.json({
      project_id: p.id,
      risk_score: risk,
      risk_level: riskLevel
    });

  } catch (err) {
    console.error("Risk Error:", err);
    res.status(500).json({ error: "Risk API failed" });
  }
});


// ===============================================
// 2️⃣ CASH FLOW FORECAST (DB + FallBack Logic)
// ===============================================
router.get("/cashflow", async (req, res) => {
  try {
    // First check if DB has data
    const data = await pool.query(
      "SELECT amount FROM cash_flow ORDER BY id DESC LIMIT 6"
    );

    let last6Months = [];

    if (data.rows.length > 0) {
      last6Months = data.rows.map((r) => Number(r.amount));
    } else {
      // Fallback sample data (safe)
      last6Months = [20000, 25000, 18000, 22000, 24000, 26000];
    }

    const avg =
      last6Months.reduce((sum, val) => sum + val, 0) / last6Months.length;

    res.json({
      last6Months,
      nextMonthForecast: avg
    });

  } catch (err) {
    console.error("Cashflow Error:", err);
    res.status(500).json({ error: "Cashflow API failed" });
  }
});


// ===============================================
// 3️⃣ PROJECT PROGRESS INSIGHTS
// ===============================================
router.get("/progress/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;

    const result = await pool.query(
      "SELECT * FROM project_progress WHERE project_id=$1",
      [projectId]
    );

    if (result.rows.length === 0)
      return res.json({ message: "No progress data found" });

    const p = result.rows[0];

    let status = "On Track";

    if (p.actual < p.planned - 10) status = "Behind Schedule";
    if (p.actual > p.planned + 10) status = "Ahead of Schedule";

    res.json({
      project_id: projectId,
      planned: p.planned,
      actual: p.actual,
      status
    });

  } catch (err) {
    console.error("Progress Error:", err);
    res.status(500).json({ error: "Progress API failed" });
  }
});


module.exports = router;
