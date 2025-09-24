import React from 'react';

export default function Card({ title, description }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
            margin: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            width: "200px",
            textAlign: "center",
            backgroundColor: "white"
        }}>
            <h3 style={{ margin: "0 0 10px", fontSize: "18px", color: "#333" }}>
                {title}
            </h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
                {description}
            </p>
        </div>
    );
}
