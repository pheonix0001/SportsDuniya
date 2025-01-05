import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your home page with an overview of the dashboard features.</p>

      <div style={{ marginTop: "20px" }}>
        <h3>Features:</h3>
        <ul>
          <li>User Authentication</li>
          <li>News and Blog Data Integration</li>
          <li>Filtering and Search</li>
          <li>Responsive Design</li>
          <li>Payout Calculator</li>
        </ul>
      </div>

      <button
        onClick={handleLoginClick}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default HomePage;
