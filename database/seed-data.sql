/* ============================================================
   MINI ERP + FINANCE SYSTEM — SEED DATA
   Author : Deepak Panaganti
   Description : Sample data for initializing PostgreSQL database
   ============================================================ */


/* ============================================================
   1️⃣  ROLES
   ============================================================ */
INSERT INTO roles (id, role_name) VALUES
(1, 'Admin'),
(2, 'Finance Manager'),
(3, 'Project Manager');


/* ============================================================
   2️⃣  USERS
   (Passwords should be hashed in real systems)
   ============================================================ */
INSERT INTO users (id, username, password, role)
VALUES
(1, 'admin', 'admin123', 'Admin'),
(2, 'finance', 'finance123', 'Finance Manager'),
(3, 'pm', 'pm123', 'Project Manager');


/* ============================================================
   3️⃣  ACCOUNTS (Chart of Accounts)
   ============================================================ */
INSERT INTO accounts (id, name) VALUES
(1, 'Construction Materials'),
(2, 'Labor Costs'),
(3, 'Equipment Rental'),
(4, 'Site Utilities'),
(5, 'Transportation Expense'),
(6, 'Office Supplies'),
(7, 'Maintenance & Repairs');


/* ============================================================
   4️⃣  VENDORS
   ============================================================ */
INSERT INTO vendors (id, name) VALUES
(1, 'ABC Constructions'),
(2, 'Global Cement Suppliers'),
(3, 'Heavy Machinery Co.'),
(4, 'Transport Express'),
(5, 'BuildTech Solutions');


/* ============================================================
   5️⃣  PROJECTS
   ============================================================ */
INSERT INTO projects (id, name, budget, spent) VALUES
(1, 'Highway Expansion Project', 5000000, 1200000),
(2, 'Metro Station Construction', 3000000, 800000),
(3, 'Bridge Reinforcement', 2000000, 450000);


/* ============================================================
   6️⃣  PROJECT PROGRESS
   ============================================================ */
INSERT INTO project_progress (id, project_id, planned, actual, status) VALUES
(1, 1, 40, 32, 'Delayed'),
(2, 2, 25, 28, 'Ahead'),
(3, 3, 55, 55, 'On Track');


/* ============================================================
   7️⃣  INVOICES
   ============================================================ */
INSERT INTO invoices (id, project_id, amount, status) VALUES
(1, 1, 150000, 'Pending'),
(2, 1, 320000, 'Paid'),
(3, 2, 90000, 'Pending'),
(4, 3, 120000, 'Overdue');


/* ============================================================
   8️⃣  JOURNAL ENTRIES
   ============================================================ */
INSERT INTO journal_entries (id, account, debit, credit, description) VALUES
(1, 'Construction Materials', 50000, 0, 'Purchased cement'),
(2, 'Labor Costs', 75000, 0, 'Weekly labor payout'),
(3, 'Equipment Rental', 0, 60000, 'Refund received'),
(4, 'Transportation Expense', 30000, 0, 'Truck rentals');


/* ============================================================
   9️⃣  CASHFLOW (Last 6 Months)
   ============================================================ */
INSERT INTO cashflow (id, month, amount) VALUES
(1, 'June', 20000),
(2, 'July', 15000),
(3, 'August', 18000),
(4, 'September', 22000),
(5, 'October', 25000),
(6, 'November', 24000);


/* ============================================================
   🔟  EXCHANGE RATES
   ============================================================ */
INSERT INTO exchange_rates (id, currency, rate) VALUES
(1, 'USD', 83.12),
(2, 'EUR', 89.34),
(3, 'GBP', 102.55);


/* ============================================================
   1️⃣1️⃣  RISK LOGS
   ============================================================ */
INSERT INTO risk_logs (id, project_id, risk_score, risk_level) VALUES
(1, 1, 72, 'High'),
(2, 2, 35, 'Low'),
(3, 3, 55, 'Medium');


/* ============================================================
   🎉 DONE — DATABASE IS NOW POPULATED!
   ============================================================ */

