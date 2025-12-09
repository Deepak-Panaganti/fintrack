Mini ERP & Finance System with AI Insights
Devopod Assignment — Deepak Panaganti


🚀 Tech Stack

Frontend: React.js

Backend: Node.js + Express

Database: PostgreSQL

Auth: JWT

📌 Project Overview

A prototype ERP + Finance Management System for the construction industry with:

Core ERP workflow

Finance module

AI-based insights (logic-based)

Admin controls

Modern dark-themed UI



✅ 1. Frontend (React.js)
✔ Included Screens

Login

Dashboard (KPIs + risk + cashflow + progress insights)

Accounts (Chart of Accounts)

Vendors

Invoices

Journal Entries

Financial Dashboard (Charts)

Admin Panel


✔ Features

Axios API Integration

Fully responsive UI

Neon dark theme

Tables, forms, charts

Smooth navigation



✅ 2. Backend (Node.js + Express)
✔ Features

JWT Authentication

Role-based access

REST APIs for all modules

SQL + Business Logic

AI Insight Engine (risk, cashflow, progress)


✔ API Endpoints
🔹 Authentication
Method	Endpoint	Description
POST	/api/auth/login	User login (JWT)

🔹 Accounts
Method	Endpoint	Description
GET	/api/accounts	Fetch all accounts
POST	/api/accounts	Create account

🔹 Vendors

| GET | /api/vendors | Fetch vendors |
| POST | /api/vendors | Create vendor |

🔹 Invoices

| GET | /api/finance/invoices | Fetch invoices |
| POST | /api/finance/invoice | Create invoice |

🔹 Journal Entries

| GET | /api/finance/journal | Fetch journal entries |
| POST | /api/finance/journal | Add journal entry |

🔹 AI Insights

| GET | /api/insights/risk/:id | Predict risk score |
| GET | /api/insights/cashflow | Cashflow forecast |
| GET | /api/insights/progress/:id | Progress deviation |



✅ 3. SQL Database

✔ ER Diagram (Text Format)
users (id, username, password, role)

projects (id, name, planned_pct, actual_pct)
project_progress (id, project_id, planned, actual, status)

accounts (id, name)
journal_entries (id, account, debit, credit, description)

vendors (id, name)
invoices (id, vendor_id, project_id, amount, status)

risk_logs (id, project_id, risk_score, risk_level)

exchange_rates (id, currency, rate)

cashflow_history (id, month, amount)



## ENTITY–RELATIONSHIP DIAGRAM (ERD)
    ┌───────────────┐
    │     users     │
    ├───────────────┤
    │ id (PK)       │
    │ username      │
    │ password      │
    │ role          │   ← Admin / Finance / Manager
    └─────┬─────────┘
        │ 1-to-many
        │
    ┌───────────────┐
    │    projects   │
    ├───────────────┤
    │ id (PK)       │
    │ name          │
    │ planned_pct   │
    │ actual_pct    │
    └─────┬─────────┘
        │ 1-to-1
        │
    ┌──────────────────────┐
    │    project_progress   │
    ├──────────────────────┤
    │ id (PK)              │
    │ project_id (FK)      │ → projects.id
    │ planned              │
    │ actual               │
    │ status               │
    └──────────────────────┘

    ──────────────────────────────────

    ┌───────────────┐
    │   accounts    │
    ├───────────────┤
    │ id (PK)       │
    │ name          │
    └─────┬─────────┘
        │ 1-to-many
        │
    ┌──────────────────┐
    │ journal_entries  │
    ├──────────────────┤
    │ id (PK)          │
    │ account (FK)*    │ → accounts.name
    │ debit            │
    │ credit           │
    │ description      │
    └──────────────────┘

    ──────────────────────────────────

    ┌───────────────┐
    │    vendors    │
    ├───────────────┤
    │ id (PK)       │
    │ name          │
    └─────┬─────────┘
        │ 1-to-many
        │
    ┌───────────────┐
    │   invoices    │
    ├───────────────┤
    │ id (PK)       │
    │ vendor_id(FK) │ → vendors.id
    │ project_id    │
    │ amount        │
    │ status        │  ← Pending / Paid / Overdue
    └───────────────┘

    ──────────────────────────────────

    ┌─────────────────┐
    │   risk_logs     │
    ├─────────────────┤
    │ id (PK)         │
    │ project_id (FK) │ → projects.id
    │ risk_score      │
    │ risk_level      │
    └─────────────────┘

    ──────────────────────────────────

    ┌──────────────────┐
    │  exchange_rates  │
    ├──────────────────┤
    │ id (PK)          │
    │ currency         │
    │ rate             │
    └──────────────────┘

    ──────────────────────────────────

    ┌─────────────────────────┐
    │     cashflow_history    │
    ├─────────────────────────┤
    │ id (PK)                 │
    │ month                   │
    │ amount                  │
    └─────────────────────────┘



✔ Sample Data Included

Users

Vendors

Accounts

Invoices

Journal entries

Project progress

Cashflow history



✅ 4. Documentation (As Required)

📘 Setup Guide
Backend
cd server
npm install
npm start


Environment variables:

PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASS=your_password
DB_NAME=mini_erp
JWT_SECRET=your_secret

Frontend
cd client
npm install
npm run dev

Database
CREATE DATABASE mini_erp;


Run tables + seed-data.sql
Backend will auto-connect and load sample data.


⭐ Feature Summary

🔐 Authentication

JWT-secured backend

Role-based module visibility


📊 Dashboard

Total projects

Total invoices

Pending payments

AI risk level

Cashflow prediction

Project progress


💰 Finance Module

Chart of accounts

Vendors

Invoices

Journal entries

Financial charts


🤖 AI Insights

Risk Score → High / Medium / Low

Cashflow Forecast → next month projection

Progress Analysis → planned vs actual


🏁 Conclusion

This project demonstrates:

✔ Full-stack ERP architecture
✔ SQL-backed finance workflows
✔ AI insights for construction management
✔ Clean API structure
✔ Professional modern UI


🙏 Thank You

Mini ERP & Finance System — Devopod Assignment