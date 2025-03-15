import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function AdminPanel() {
  const [coupons, setCoupons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/admin/login"); // Redirect to login if no token
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/api/admin/coupons`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCoupons(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch coupons. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoupons();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/admin/login"); // Redirect to login page
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      <div className="admin-panel">
        <h1>Admin Panel</h1>
        <button onClick={handleLogout}>Logout</button>
        <ul>
          {coupons.map((coupon) => (
            <li key={coupon._id}>
              {coupon.code} - {coupon.isAvailable ? "Available" : "Claimed"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;