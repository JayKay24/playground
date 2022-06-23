import React from "react";
import "./Button.css";

export default function Button({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
