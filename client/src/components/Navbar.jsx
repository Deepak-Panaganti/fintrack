import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav style={styles.navbar}>

      {/* BRAND LOGO / NAME */}
      <div style={styles.brand}>FinTrack Pro</div>

      {/* NAV LINKS */}
      <div style={styles.links}>
        {[
          { to: "/dashboard", label: "Dashboard" },
          { to: "/invoices", label: "Invoices" },
          { to: "/journal", label: "Journal" },
          { to: "/accounts", label: "Accounts" },
          { to: "/vendors", label: "Vendors" },
          { to: "/financials", label: "Financial Dashboard" },
          { to: "/admin", label: "Admin" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.active } : styles.link
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* LOGOUT */}
      <button onClick={logout} style={styles.logout}>
        Logout
      </button>

    </nav>
  );
}

/* ----------------------- NAVBAR STYLE OBJECT ----------------------- */

const styles = {
  navbar: {
    width: "100%",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    background: "#1e1e2f",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    fontFamily: "Segoe UI, sans-serif",
  },

  brand: {
    fontSize: "22px",
    fontWeight: "800",
    color: "white",
    marginRight: "22px",
    letterSpacing: "0.8px",
    textShadow: "0 0 12px rgba(255,255,255,0.35)",
  },

  links: {
    display: "flex",
    gap: "14px",
  },

  link: {
    color: "#bfc4d8",
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
    transition: "0.22s ease",
  },

  active: {
    color: "white",
    background: "rgba(255,255,255,0.06)",
    boxShadow: "0 0 12px rgba(165,110,255,0.45)",
  },

  logout: {
    marginLeft: "auto",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg,#ff4d4d,#ff1a1a)",
    color: "white",
    fontWeight: "600",
    transition: "0.25s",
    boxShadow: "0 0 12px rgba(255,60,60,0.5)",
  },
};
