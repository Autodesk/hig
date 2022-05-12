import React from "react";

export default function NotificationsFlyoutLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        paddingBottom: "450px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
