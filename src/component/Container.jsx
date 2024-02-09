import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        paddingInline: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
