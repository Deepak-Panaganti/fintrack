import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Journal from "./pages/Journal";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import FinancialDashboard from "./pages/FinancialDashboard";
import Accounts from "./pages/Accounts";
import Vendors from "./pages/Vendors";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/financials" element={<FinancialDashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </>
  );
}

export default App;
