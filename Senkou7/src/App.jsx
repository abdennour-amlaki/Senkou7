import React from "react";
import ComponentA from "./ComponentA";
import './App.css'
export default function App() {
  const user = {
    name: "Abdennour Amlaki",
    email: "abdennouramlaki@gmail.com",
    description: "Frontend developer passionate about UI/UX and React."
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <ComponentA user={user} />
    </div>
  );
}