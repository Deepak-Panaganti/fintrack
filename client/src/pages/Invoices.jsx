import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Invoices() {
  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending");
  const [invoices, setInvoices] = useState([]);

  const token = localStorage.getItem("token");

  const clearInputs = () => {
    setProjectId("");
    setAmount("");
    setStatus("Pending");
  };

  const fetchInvoices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/finance/invoices", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const sorted = res.data.sort((a, b) => a.id - b.id);
      setInvoices(sorted);
    } catch (err) {
      console.log("Error loading invoices", err);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const createInvoice = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/finance/invoice",
        { project_id: projectId, amount, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Invoice Created Successfully");
      clearInputs();
      fetchInvoices();

    } catch (err) {
      console.log("Invoice error:", err);
      alert("Error creating invoice");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #161621, #0f0f17)"
      }}
    >
      <div
        style={{
          width: "85%",
          background: "rgba(255,255,255,0.03)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)"
        }}
      >
        {/* 🔥 NEON RED TITLE */}
        <div
          style={{
            width: "40%",
            margin: "0 auto 35px",
            padding: "18px 0",
            background: "#ff0000",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 0 25px rgba(255,0,0,0.6)"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "36px",
              fontWeight: "800",
              color: "white",
              textShadow: "0 0 12px rgba(255,255,255,0.85)"
            }}
          >
            Invoices
          </h2>
        </div>

        {/* INPUTS */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "30px"
          }}
        >
          <input
            placeholder="Project ID"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontSize: "17px"
            }}
          />

          <input
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontSize: "17px"
            }}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontSize: "17px"
            }}
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Overdue">Overdue</option>
          </select>

          <button
            onClick={createInvoice}
            style={{
              padding: "15px 32px",
              borderRadius: "10px",
              background: "linear-gradient(90deg, #a56eff, #734bff)",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 0 18px rgba(115,75,255,0.5)"
            }}
          >
            Create Invoice
          </button>
        </div>

        {/* TABLE */}
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 12px"
          }}
        >
          <thead>
            <tr>
              {["ID", "Project ID", "Amount", "Status"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "14px",
                    color: "white",
                    fontSize: "18px",
                    textAlign: "left",
                    letterSpacing: "0.7px"
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                style={{
                  background: "rgba(30,30,60,0.75)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.45)"
                }}
              >
                <td style={tdStyle}>{inv.id}</td>
                <td style={tdStyle}>{inv.project_id}</td>
                <td style={tdStyle}>{inv.amount}</td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      color: "white",
                      backgroundColor:
                        inv.status === "Paid"
                          ? "green"
                          : inv.status === "Overdue"
                          ? "red"
                          : "#d09800",
                    }}
                  >
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Shared TD Style
const tdStyle = {
  padding: "16px",
  color: "#f5f5f5",
  fontSize: "17px"
};
