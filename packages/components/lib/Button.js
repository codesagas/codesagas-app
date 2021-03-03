var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
export function Button(props) {
    return (React.createElement("button", __assign({ style: {
            background: "rebeccapurple",
            color: "hotpink",
            borderRadius: "4px",
            border: "none",
            padding: "8px 12px",
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            cursor: "pointer",
        } }, props)));
}
