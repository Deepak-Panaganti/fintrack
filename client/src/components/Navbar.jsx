// // // client/src/components/Navbar.jsx
// // import { Link } from "react-router-dom";

// // export default function Navbar() {

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     window.location.href = "/";
// //   };

// //   return (
// //     <nav
// //       style={{
// //         padding: "15px",
// //         backgroundColor: "#222",
// //         display: "flex",
// //         alignItems: "center",
// //         gap: "20px",
// //         color: "white"
// //       }}
// //     >
// //       {/* MAIN NAVIGATION LINKS */}
// //       <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
// //         Dashboard
// //       </Link>

// //       <Link to="/invoices" style={{ color: "white", textDecoration: "none" }}>
// //         Invoices
// //       </Link>

// //       <Link to="/journal" style={{ color: "white", textDecoration: "none" }}>
// //         Journal
// //       </Link>

// //       <Link to="/accounts" style={{ color: "white", textDecoration: "none" }}>
// //         Accounts
// //       </Link>

// //       <Link to="/vendors" style={{ color: "white", textDecoration: "none" }}>
// //         Vendors
// //       </Link>

// //       <Link to="/financials" style={{ color: "white", textDecoration: "none" }}>
// //         Financial Dashboard
// //       </Link>

// //       <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
// //         Admin
// //       </Link>

// //       {/* LOGOUT BUTTON */}
// //       <button
// //         onClick={logout}
// //         style={{
// //           marginLeft: "auto",
// //           background: "red",
// //           color: "white",
// //           border: "none",
// //           padding: "6px 12px",
// //           cursor: "pointer",
// //           borderRadius: "4px"
// //         }}
// //       >
// //         Logout
// //       </button>
// //     </nav>
// //   );
// // }

// import { NavLink } from "react-router-dom";

// export default function Navbar() {

//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   };

//   return (
//     <nav style={styles.navbar}>
      
//       {/* BRAND */}
//       <div style={styles.brand}></div>

//       {/* NAVIGATION LINKS */}
//       <div style={styles.links}>
//         <NavLink style={styles.link} to="/dashboard">Dashboard</NavLink>
//         <NavLink style={styles.link} to="/invoices">Invoices</NavLink>
//         <NavLink style={styles.link} to="/journal">Journal</NavLink>
//         <NavLink style={styles.link} to="/accounts">Accounts</NavLink>
//         <NavLink style={styles.link} to="/vendors">Vendors</NavLink>
//         <NavLink style={styles.link} to="/financials">Financial Dashboard</NavLink>
//         <NavLink style={styles.link} to="/admin">Admin</NavLink>
//       </div>

//       {/* LOGOUT */}
//       <button style={styles.logout} onClick={logout}>
//         Logout
//       </button>

//     </nav>
//   );
// }

// /* ----------------------- NAVBAR STYLES ----------------------- */
// const styles = {
//   navbar: {
//     width: "100%",
//     padding: "14px 24px",
//     display: "flex",
//     alignItems: "center",
//     background: "#1e1e2f", // Deep navy background
//     borderBottom: "1px solid rgba(255,255,255,0.06)",
//     boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
//     position: "sticky",
//     top: 0,
//     zIndex: 10,
//     fontFamily: "Segoe UI, sans-serif",
//   },

//   brand: {
//     color: "white",
//     fontSize: "20px",
//     fontWeight: "700",
//     marginRight: "20px",
//     letterSpacing: "0.5px",
//   },

//   links: {
//     display: "flex",
//     gap: "14px",
//   },

//   link: {
//     color: "#bfc4d8",
//     textDecoration: "none",
//     padding: "8px 14px",
//     borderRadius: "8px",
//     fontSize: "15px",
//     fontWeight: "500",
//     transition: "0.2s ease",
//   },

//   logout: {
//     marginLeft: "auto",
//     padding: "8px 16px",
//     border: "none",
//     borderRadius: "8px",
//     background: "linear-gradient(90deg,#ff4d4d,#ff2a2a)",
//     color: "white",
//     fontWeight: "600",
//     cursor: "pointer",
//     transition: "0.2s",
//   },
// };

// /* Hover Styles Applied Dynamically */
// document.addEventListener("mouseover", function (e) {
//   if (e.target.matches("a")) {
//     e.target.style.color = "white";
//     e.target.style.background = "rgba(255,255,255,0.05)";
//     e.target.style.boxShadow = "0 0 10px rgba(165,110,255,0.4)";
//   }
// });

// document.addEventListener("mouseout", function (e) {
//   if (e.target.matches("a")) {
//     e.target.style.color = "#bfc4d8";
//     e.target.style.background = "transparent";
//     e.target.style.boxShadow = "none";
//   }
// });

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
