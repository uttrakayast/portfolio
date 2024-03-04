import React from "react";

function Blog() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        height: "100vh",
        width: "100vw",
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center"
      }}
    >
      Coming Soon!
      <div style={{
        fontSize: 40,
        textAlign: "center",
        color: "#a8adb5"
      }}>
        <a href="/">Back to Home</a>
      </div>
    </div>
  );
}

export default Blog;
