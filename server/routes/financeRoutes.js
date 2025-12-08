// server/routes/financeRoutes.js
const express = require("express");
const router = express.Router();
const pool = require("../config/db");





// ===============================
// CREATE INVOICE (FINAL FIXED)
// ===============================
router.post("/invoice", async (req, res) => {
  try {
    const { project_id, amount, status } = req.body;

    console.log("📥 Received from frontend:", { project_id, amount, status });

    if (!project_id || !amount || !status) {
      console.log("❌ Missing field:", req.body);
      return res.status(400).json({ error: "Missing fields" });
    }

    const result = await pool.query(
      "INSERT INTO invoices (project_id, amount, status) VALUES ($1, $2, $3) RETURNING *",
      [project_id, amount, status]
    );

    console.log("✅ Saved to DB:", result.rows[0]);

    res.json({ message: "Invoice created", invoice: result.rows[0] });

  } catch (err) {
    console.error("🔥 Invoice creation error:", err);
    res.status(500).json({ error: "Server error creating invoice" });
  }
});

// ===============================
// LIST INVOICES
// ===============================
router.get("/invoices", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM invoices ORDER BY id DESC");
    res.json(data.rows);
  } catch (err) {
    console.error("Invoice fetch error:", err);
    res.status(500).json({ error: "Server error fetching invoices" });
  }
});


// ===============================
// ADD JOURNAL ENTRY
// ===============================
router.post("/journal", async (req, res) => {
  console.log("Journal API hit:", req.body);

  try {
    const { account, debit, credit, description } = req.body;

    await pool.query(
      "INSERT INTO journal_entries(account, debit, credit, description) VALUES($1,$2,$3,$4)",
      [account, debit, credit, description]
    );

    res.json({ message: "Journal entry added" });
  } catch (err) {
    console.error("Journal entry error:", err);
    res.status(500).json({ error: "Server error adding journal entry" });
  }
});


// ===============================
// LIST JOURNAL ENTRIES
// ===============================
router.get("/journal", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM journal_entries ORDER BY id DESC");
    res.json(data.rows);
  } catch (err) {
    console.error("Journal fetch error:", err);
    res.status(500).json({ error: "Server error fetching journal entries" });
  }
});


// ===============================
// FINANCIAL STATEMENTS (Balance Sheet, P&L)
// ===============================

router.get("/financials", async (req, res) => {
  try {
    // SUM of all debit values
    const debitRes = await pool.query(
      "SELECT COALESCE(SUM(debit),0) AS total_debit FROM journal_entries"
    );

    // SUM of all credit values
    const creditRes = await pool.query(
      "SELECT COALESCE(SUM(credit),0) AS total_credit FROM journal_entries"
    );

    const totalDebit = Number(debitRes.rows[0].total_debit);
    const totalCredit = Number(creditRes.rows[0].total_credit);

    // Very simple financial reports
    const balanceSheet = totalDebit - totalCredit;
    const profitLoss = totalCredit - totalDebit;

    res.json({
      total_debit: totalDebit,
      total_credit: totalCredit,
      balance_sheet: balanceSheet,
      profit_and_loss: profitLoss
    });

  } catch (err) {
    console.error("Financials error:", err);
    res.status(500).json({ error: "Failed to compute financials" });
  }
});


module.exports = router;
