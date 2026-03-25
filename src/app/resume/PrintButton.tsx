"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        background: "#7c5cff",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
      }}
    >
      Save as PDF
    </button>
  );
}
