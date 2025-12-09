# **Mini ERP & Finance System with AI Insights**  
### _For Construction Industry – Devopod Assignment_  
**Author:** Deepak Panaganti  

---

<br>

## 🚀 **Tech Stack**
- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  
- **Authentication:** JWT  

---

<br>

## 📌 **Project Overview**
A prototype **ERP + Finance Management System** designed for construction companies.  
It provides:

- Core ERP workflow  
- Finance management  
- AI-driven insights  
- Admin controls  
- Dark-themed modern UI  

---

<br>

# ✅ **1. Frontend (React.js)**  

## ✔ **Included Screens**
- Login  
- Dashboard (KPIs + risk + cashflow + progress insights)  
- Accounts (Chart of Accounts)  
- Vendors  
- Invoices  
- Journal Entries  
- Financial Dashboard (Charts)  
- Admin Panel  

<br>

## ⭐ **Frontend Features**
- Axios API Integration  
- Fully responsive UI  
- Neon dark theme  
- Smooth navigation  
- Interactive cards, tables, charts  

---

<br>

# ✅ **2. Backend (Node.js + Express)**  

## ⭐ **Backend Features**
- JWT Authentication  
- Role-based access control  
- REST APIs for all modules  
- SQL + business logic  
- AI logic engine (risk, cashflow, progress)  

---

<br>

# 📘 **API Endpoints**

## 🔐 Authentication  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/auth/login` | User login (JWT) |

<br>

## 🧾 Accounts  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/accounts` | Fetch accounts |
| **POST** | `/api/accounts` | Create account |

<br>

## 🏢 Vendors  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/vendors` | Fetch vendors |
| **POST** | `/api/vendors` | Create vendor |

<br>

## 💰 Invoices  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/finance/invoices` | Fetch invoices |
| **POST** | `/api/finance/invoice` | Create invoice |

<br>

## 📘 Journal Entries  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/finance/journal` | Fetch journal entries |
| **POST** | `/api/finance/journal` | Add journal entry |

<br>

## 🤖 AI Insights  
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/insights/risk/:id` | Predict project risk score |
| **GET** | `/api/insights/cashflow` | Cashflow forecast |
| **GET** | `/api/insights/progress/:id` | Progress deviation |

---

<br>

# ✅ **3. SQL Database**

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


<br>

## ✔ **Sample Data Included**
- Users  
- Vendors  
- Accounts  
- Invoices  
- Journal entries  
- Project progress  
- Cashflow history  

---

<br>


# ✅ **4. Documentation (As Required)**  

## 🚀 **Setup Guide**

## 🔧 Backend Setup

cd server
npm install
npm start
<br>

## 🧩 Environment Variables
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASS=your_password
DB_NAME=mini_erp
JWT_SECRET=your_secret

<br>


## 💻 Frontend Setup
cd client
npm install
npm run dev

<br>


## 🗄 Database Setup
CREATE DATABASE mini_erp;


Run all tables + seed-data.sql to insert sample data.

Backend will auto-connect and load initial sample values.

<br>

---

## 🌟 Feature Summary
🔐 Authentication

JWT-secured backend

Role-based module visibility

<br>


## 📊 Dashboard

Total projects

Total invoices

Pending payments

AI risk level

Cashflow prediction

Progress deviation

<br>

## 💰 Finance Module

Chart of accounts

Vendors

Invoices

Journal entries

Financial charts

<br>

## 🤖 AI Insights

Risk Score: High / Medium / Low

Cashflow Forecast: next month prediction

Progress Analysis: planned vs actual

<br>

## 🏁 Conclusion

This Mini ERP demonstrates:

✔ Full-stack ERP architecture
✔ SQL-backed finance workflows
✔ AI insights for construction management
✔ Clean API structure
✔ Professional dark UI

<br>

## 🙏 Thank You
Mini ERP & Finance System – Devopod Assignment Submission

Developed by Deepak Panaganti





