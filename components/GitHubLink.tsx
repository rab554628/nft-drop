import styles from "../../styles/Thirdweb.module.css";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          height: 0,
          width: 0,
          border: "0px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
        }}
      >
      
      </div>
    </>
  );
}
