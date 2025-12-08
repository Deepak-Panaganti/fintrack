// // client/src/pages/Admin.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, []);

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
        {/* 🔥 Short Neon Header */}
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
            Admin Panel
          </h2>
        </div>

        {/* Subtitle */}
        <h3
          style={{
            color: "#ffffff",
            fontSize: "26px",
            marginBottom: "18px",
            fontWeight: "700",
            textShadow: "0 0 12px rgba(255,255,255,0.25)",
          }}
        >
          User Management
        </h3>

        {/* TABLE */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "rgba(30,30,60,0.75)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
          }}
        >
          <thead>
            <tr
              style={{
                background: "rgba(90,90,140,0.5)",
                color: "white",
                fontSize: "18px",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Username</th>
              <th style={{ padding: "12px" }}>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  color: "#e4e4e4",
                  fontSize: "17px",
                }}
              >
                <td style={{ padding: "12px" }}>{u.id}</td>
                <td style={{ padding: "12px" }}>{u.username}</td>
                <td style={{ padding: "12px" }}>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
