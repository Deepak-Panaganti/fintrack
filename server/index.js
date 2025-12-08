const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// AUTH ROUTES
app.use("/api/auth", require("./routes/authRoutes"));

// DASHBOARD ROUTES
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

// FINANCE ROUTES
app.use("/api/finance", require("./routes/financeRoutes"));

// INSIGHTS ROUTES
app.use("/api/insights", require("./routes/insightRoutes"));

// ACCOUNTS ROUTES (⚠ ADD THIS)
app.use("/api/accounts", require("./routes/accountsRoutes"));

// VENDORS ROUTE (later)
app.use("/api/vendors", require("./routes/vendorsRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
