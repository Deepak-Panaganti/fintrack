// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Journal() {
//   const [account, setAccount] = useState("");
//   const [debit, setDebit] = useState("");
//   const [credit, setCredit] = useState("");
//   const [description, setDescription] = useState("");
//   const [entries, setEntries] = useState([]);

//   const token = localStorage.getItem("token");

//   const clearInputs = () => {
//     setAccount("");
//     setDebit("");
//     setCredit("");
//     setDescription("");
//   };

//   const fetchJournal = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/finance/journal", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // Sort by ID in ascending order (1,2,3…)
//       const sorted = res.data.sort((a, b) => a.id - b.id);
//       setEntries(sorted);
//     } catch (err) {
//       console.log("Error loading journal", err);
//     }
//   };

//   useEffect(() => {
//     fetchJournal();
//   }, []);

//   const addEntry = async () => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/finance/journal",
//         {
//           account,
//           debit,
//           credit,
//           description,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       alert("Journal Entry Added");
//       clearInputs();
//       fetchJournal();
//     } catch (err) {
//       console.log("Journal error:", err);
//       alert("Error adding journal entry");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Journal Entries</h2>

//       {/* Input Section */}
//       <div style={styles.inputRow}>
//         <input
//           type="text"
//           placeholder="Account"
//           value={account}
//           onChange={(e) => setAccount(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="number"
//           placeholder="Debit"
//           value={debit}
//           onChange={(e) => setDebit(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="number"
//           placeholder="Credit"
//           value={credit}
//           onChange={(e) => setCredit(e.target.value)}
//           style={styles.input}
//         />

//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           style={styles.input}
//         />

//         <button onClick={addEntry} style={styles.button}>
//           Add Entry
//         </button>

        
//       </div>

//       {/* Journal Table */}
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>ID</th>
//             <th style={styles.th}>Account</th>
//             <th style={styles.th}>Debit</th>
//             <th style={styles.th}>Credit</th>
//             <th style={styles.th}>Description</th>
//           </tr>
//         </thead>

//         <tbody>
//           {entries.map((e) => (
//             <tr key={e.id} style={styles.tr}>
//               <td style={styles.td}>{e.id}</td>
//               <td style={styles.td}>{e.account}</td>
//               <td style={styles.td}>{e.debit}</td>
//               <td style={styles.td}>{e.credit}</td>
//               <td style={styles.td}>{e.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// /* ===================== STYLES ===================== */
// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "Arial",
//   },
//   title: {
//     fontSize: "28px",
//     marginBottom: "20px",
//   },
//   inputRow: {
//     display: "flex",
//     gap: "15px",
//     marginBottom: "20px",
//   },
//   input: {
//     padding: "10px",
//     fontSize: "16px",
//     width: "180px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   clearButton: {
//     padding: "10px 20px",
//     backgroundColor: "#555",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     fontSize: "18px",
//   },
//   th: {
//     borderBottom: "2px solid #333",
//     padding: "12px",
//     textAlign: "left",
//     backgroundColor: "#f0f0f0",
//   },
//   tr: {
//     borderBottom: "1px solid #ccc",
//   },
//   td: {
//     padding: "12px",
//   },
// };


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Journal() {
  const [account, setAccount] = useState("");
  const [debit, setDebit] = useState("");
  const [credit, setCredit] = useState("");
  const [description, setDescription] = useState("");
  const [entries, setEntries] = useState([]);

  const token = localStorage.getItem("token");

  const clearInputs = () => {
    setAccount("");
    setDebit("");
    setCredit("");
    setDescription("");
  };

  const fetchJournal = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/finance/journal", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const sorted = res.data.sort((a, b) => a.id - b.id);
      setEntries(sorted);
    } catch (err) {
      console.log("Error loading journal", err);
    }
  };

  useEffect(() => {
    fetchJournal();
  }, []);

  const addEntry = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/finance/journal",
        { account, debit, credit, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Journal Entry Added");
      clearInputs();
      fetchJournal();
    } catch (err) {
      console.log("Journal error:", err);
      alert("Error adding journal entry");
    }
  };

  /* ===================================================================== */

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
          width: "85%",
          background: "rgba(255,255,255,0.03)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* ❤️ Neon Red Title */}
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
            }}
          >
            Journal Entries
          </h2>
        </div>

        {/* ⭐ Input Row */}
        <div style={{ display: "flex", gap: "14px", marginBottom: "30px" }}>
          <input
            placeholder="Account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Debit"
            type="number"
            value={debit}
            onChange={(e) => setDebit(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Credit"
            type="number"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={inputStyle}
          />

          <button onClick={addEntry} style={buttonStyle}>
            Add Entry
          </button>
        </div>

        {/* ⭐ Journal Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 12px",
          }}
        >
          <thead>
            <tr>
              {["ID", "Account", "Debit", "Credit", "Description"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "14px",
                    color: "white",
                    fontSize: "18px",
                    textAlign: "left",
                    letterSpacing: "0.7px",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {entries.map((e) => (
              <tr
                key={e.id}
                style={{
                  background: "rgba(30,30,60,0.75)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
                }}
              >
                <td style={tdStyle}>{e.id}</td>
                <td style={tdStyle}>{e.account}</td>
                <td style={tdStyle}>{e.debit}</td>
                <td style={tdStyle}>{e.credit}</td>
                <td style={tdStyle}>{e.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===================================================================== */
/* SHARED STYLES (Clean + Modern UI) */
const inputStyle = {
  flex: 1,
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  fontSize: "17px",
};

const buttonStyle = {
  padding: "15px 32px",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #a56eff, #734bff)",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "16px",
  boxShadow: "0 0 18px rgba(115,75,255,0.5)",
};

const tdStyle = {
  padding: "16px",
  color: "#f5f5f5",
  fontSize: "17px",
};
