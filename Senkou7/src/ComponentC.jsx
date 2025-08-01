import React from "react";

export default function ComponentC({ user }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      maxWidth: "300px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      margin: "20px auto"
    }}>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p>{user.description}</p>
    </div>
  );
}