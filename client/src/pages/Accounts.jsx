// client/src/pages/Accounts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/accounts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAccounts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, []);

  const add = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/accounts",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setName("");

      const res = await axios.get("http://localhost:5000/api/accounts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAccounts(res.data);
    } catch (err) {
      console.log(err);
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
        background: "linear-gradient(to bottom, #161621, #0f0f17)",
      }}
    >
      <div
        style={{
          width: "70%",
          background: "rgba(255,255,255,0.03)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* 🔥 BEAUTIFUL NEON RED HEADING */}
        {/* <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "35px",
            letterSpacing: "1.2px",
            background: "linear-gradient(90deg, #ff4e50, #ff1a1a)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0px 0px 18px rgba(255,40,40,0.45)",
          }}
        >
          Chart of Accounts
        </h2> */}
        {/* ❤️ IMPROVED SHORT NEON RED HEADER */}
<div
  style={{
    width: "40%",           // ⭐ Shorter width
    margin: "0 auto 35px",  // ⭐ Centers it
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
    Chart of Accounts
  </h2>
</div>


        {/* INPUT ROW */}
        <div style={{ display: "flex", gap: "14px", marginBottom: "30px" }}>
          <input
            placeholder="Enter account name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              fontSize: "17px",
            }}
          />

          <button
            onClick={add}
            style={{
              padding: "15px 32px",
              borderRadius: "10px",
              background: "linear-gradient(90deg, #a56eff, #734bff)",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 0 18px rgba(115,75,255,0.5)",
            }}
          >
            Add Account
          </button>
        </div>

        {/* Accounts List Title */}
        <h3
          style={{
            color: "#ffffff",
            fontSize: "26px",
            marginBottom: "18px",
            fontWeight: "700",
            textShadow: "0 0 12px rgba(255,255,255,0.25)",
          }}
        >
          Accounts List
        </h3>

        {/* ACCOUNTS LIST */}
        <div>
          {accounts.map((a) => (
            <div
              key={a.id}
              style={{
                padding: "18px",
                marginBottom: "14px",
                background: "rgba(30,30,60,0.75)",
                borderRadius: "12px",
                color: "#f5f5f5",
                fontSize: "19px",
                fontWeight: "500",
                boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.04)",
                letterSpacing: "0.3px",
              }}
            >
              {a.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
