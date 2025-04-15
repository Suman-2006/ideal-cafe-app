
import React from "react";

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>✨ Admin Dashboard</h1>
        <p style={styles.text}>Welcome back to Ideal Café's control panel.</p>
        <p style={styles.subtext}>Manage orders, menu, and customer insights easily!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem 3rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    color: "#343a40",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    color: "#495057",
  },
  subtext: {
    marginTop: "0.5rem",
    color: "#868e96",
    fontSize: "0.95rem",
  },
};

export default AdminDashboard;
