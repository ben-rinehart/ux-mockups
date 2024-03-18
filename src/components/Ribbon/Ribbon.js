import React from "react";
import "./Ribbon.css";

export default function Ribbon({
  children
}) {
  return (
    <div className="ribbon ribbon-top-right">
      <span className="bg-success">{children}</span>
    </div>
  )
}