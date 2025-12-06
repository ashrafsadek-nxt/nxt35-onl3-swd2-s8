

import { useRef, useState } from "react";
import { axiosConf } from "../../assets/AxiosConf/AxiosConf";

import { useAuth } from "../../Context/AuthContext";

import React from "react";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from ;

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تحطي validation أو API call
    login(); // خلي المستخدم authorized
    navigate("/product"); // بعد التسجيل يروح للهوم
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="email"
          placeholder="Email"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
