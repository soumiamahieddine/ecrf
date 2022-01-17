import React from "react";

export default function TextError({ children }) {
  return (
    <div style={{ color: "red" }} className="error">
      {children}
    </div>
  );
}
