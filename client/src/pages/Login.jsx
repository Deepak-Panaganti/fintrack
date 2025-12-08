// client/src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  /* ------------------ Input Style (shared) ------------------ */
  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "18px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "17px",
    outline: "none",
    boxSizing: "border-box", // 🔥 ensures equal width
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #161621, #0f0f17)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* LOGIN CARD */}
      <div
        style={{
          width: "400px",
          padding: "40px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "16px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "800",
            marginBottom: "30px",
            color: "#b57bff",
            textShadow: "0 0 15px rgba(165,110,255,0.6)",
          }}
        >
          Login
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {/* Login Button */}
        <button
          onClick={loginUser}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(90deg, #a56eff, #734bff)",
            color: "white",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
            boxShadow: "0 0 18px rgba(115,75,255,0.6)",
          }}
        >
          Login
        </button>

        {/* Footer */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Secure Access • FinTrack Pro
        </p>
      </div>
    </div>
  );
}

