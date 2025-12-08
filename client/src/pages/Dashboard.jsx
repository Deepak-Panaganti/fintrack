import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [risk, setRisk] = useState(null);
  const [cashFlow, setCashFlow] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const token = localStorage.getItem("token");

        const d = await axios.get("http://localhost:5000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(d.data);

        const r = await axios.get("http://localhost:5000/api/insights/risk/1", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRisk(r.data);

        const cf = await axios.get("http://localhost:5000/api/insights/cashflow", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCashFlow(cf.data);

        const p = await axios.get("http://localhost:5000/api/insights/progress/1", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProgress(p.data);

      } catch (err) {
        console.log("Dashboard load error:", err);
      }
    };

    loadData();
  }, []);

  if (!stats || !risk || !cashFlow || !progress)
    return <h3>Loading...</h3>;

  // ✅ FIX: cardStyle MUST be declared OUTSIDE JSX
  const cardStyle = {
    flex: 1,
    padding: "18px",
    background: "rgba(30,30,60,0.75)",
    borderRadius: "12px",
    color: "white",
    fontSize: "19px",
    fontWeight: "500",
    boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
    border: "1px solid rgba(255,255,255,0.04)",
    letterSpacing: "0.3px",
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #161621, #0f0f17)",
      }}
    >
      <div
        style={{
          width: "85%",
          background: "rgba(255,255,255,0.03)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* 🔥 NEON HEADER */}
        <div
          style={{
            width: "40%",
            margin: "0 auto 35px",
            padding: "18px 0",
            background: "#ff0000",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 0 25px rgba(255,0,0,0.6)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "36px",
              fontWeight: "800",
              color: "white",
              textShadow: "0 0 12px rgba(255,255,255,0.85)",
              letterSpacing: "1px",
            }}
          >
            Dashboard Overview
          </h2>
        </div>

        {/* ⭐ FIRST ROW — CENTER 3 CARDS */}
        <div
          style={{
            width: "60%",
            margin: "0 auto 40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h4>Total Projects</h4>
            <p>{stats.total_projects}</p>
          </div>

          <div style={cardStyle}>
            <h4>Total Invoices</h4>
            <p>{stats.total_invoices}</p>
          </div>

          <div style={cardStyle}>
            <h4>Pending Payments</h4>
            <p>{stats.pending_payments}</p>
          </div>
        </div>

        {/* ⭐ SECOND ROW — INSIGHTS */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ ...cardStyle, flex: "1" }}>
            <h4>AI Risk Level</h4>
            <p style={{ color: risk.risk_level === "High" ? "red" : "green", fontSize: "24px" }}>
              {risk.risk_level}
            </p>
            <small>Risk Score: {risk.risk_score}</small>
          </div>

          <div style={{ ...cardStyle, flex: "1" }}>
            <h4>Cash Flow Forecast</h4>
            <p style={{ fontSize: "24px" }}>₹{Math.round(cashFlow.nextMonthForecast)}</p>
            <small>Next Month Projection</small>
          </div>

          <div style={{ ...cardStyle, flex: "1" }}>
            <h4>Project Progress</h4>
            <p style={{ fontSize: "24px" }}>{progress.status}</p>
            <small>
              Planned: {progress.planned}% | Actual: {progress.actual}%
            </small>
          </div>
        </div>

      </div>
    </div>
  );
}
