import * as React from "react";
export function Button(props: any) {
  return (
    <button
      style={{
        background: "rebeccapurple",
        color: "hotpink",
        borderRadius: "4px",
        border: "none",
        padding: "8px 12px",
        fontSize: "16px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        cursor: "pointer",
      }}
    {...props} />
  );
}
