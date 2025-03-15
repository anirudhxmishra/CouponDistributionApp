import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function CouponClaim() {
  const [coupon, setCoupon] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClaim = async () => {
    setIsLoading(true);
    try {
      const ipAddress = "127.0.0.1"; // Replace with dynamic IP fetching logic
      const browserSession = "session123"; // Replace with session tracking logic

      const response = await axios.post(`${API_BASE_URL}/api/coupons/claim`, {
        ipAddress,
        browserSession,
      });

      setCoupon(response.data.coupon);
      setMessage("Coupon claimed successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="coupon-claim">
      <button onClick={handleClaim} disabled={isLoading}>
        {isLoading ? "Claiming..." : "Claim Coupon"}
      </button>
      {coupon && <p>Your Coupon: {coupon.code}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

export default CouponClaim;