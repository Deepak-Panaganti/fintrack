// client/src/pages/FinancialDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

export default function FinancialDashboard() {
  const [cashflow, setCashflow] = useState([]);
  const [budget, setBudget] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    loadCashflow();
    loadBudget();
  }, []);

  // --------------------------
  // LOAD CASHFLOW
  // --------------------------
  const loadCashflow = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/insights/cashflow",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCashflow(res.data.last6Months);
    } catch (err) {
      console.log("Cashflow API error:", err);
    }
  };

  // --------------------------
  // LOAD BUDGET DATA
  // --------------------------
  const loadBudget = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBudget(Number(res.data.budget || 0));
      setSpent(Number(res.data.spent || 0));
    } catch (err) {
      console.log("Dashboard API error:", err);
    }
  };

  const cashflowData =
    cashflow.length > 0
      ? cashflow
      : [20000, 15000, 18000, 22000, 25000, 24000];

  // Card styling reusable
  const chartCard = {
    background: "rgba(30, 30, 60, 0.6)",
    padding: "25px",
    borderRadius: "18px",
    marginBottom: "40px",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.45)",
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
        {/* 🔥 FINANCIAL DASHBOARD TITLE */}
        <div
          style={{
            width: "40%",
            margin: "0 auto 40px",
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
            Financial Dashboard
          </h2>
        </div>

        {/* -----------------------------
              CASH FLOW LINE CHART
        ------------------------------ */}
        <div style={chartCard}>
          <h3
            style={{
              color: "white",
              marginBottom: "15px",
              textShadow: "0 0 8px rgba(255,255,255,0.3)",
            }}
          >
            Cash Flow Trend (Last 6 Months)
          </h3>

          <Line
            data={{
              labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
              datasets: [
                {
                  label: "Cash Flow",
                  data: cashflowData,
                  borderColor: "#8a75ff",
                  backgroundColor: "rgba(138,117,255,0.2)",
                  borderWidth: 3,
                },
              ],
            }}
            height={120}
          />
        </div>

        {/* -----------------------------
              BUDGET VS SPENT
        ------------------------------ */}
        <div style={chartCard}>
          <h3
            style={{
              color: "white",
              marginBottom: "15px",
              textShadow: "0 0 8px rgba(255,255,255,0.3)",
            }}
          >
            Budget vs Actual Spend
          </h3>

          <Bar
            data={{
              labels: ["Budget", "Spent"],
              datasets: [
                {
                  label: "Amount",
                  data: [budget, spent],
                  backgroundColor: ["#00cc66", "#ff4444"],
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { color: "white" },
                },
                x: {
                  ticks: { color: "white" },
                },
              },
              plugins: {
                legend: { labels: { color: "white" } },
              },
            }}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}