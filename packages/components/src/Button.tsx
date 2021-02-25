import * as React from "react";
export function Button(props: any) {
  return (
    <button
      style={{
        backgroundColor: "rebeccapurple",
        color: "white",
        borderRadius: "4px",
        border: "none",
        padding: "8px 12px",
        fontSize: "16px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        cursor: "pointer",
      }}
    >
      {props.children}
    </button>
  );
}
