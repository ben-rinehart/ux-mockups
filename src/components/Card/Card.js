import Header from "../Header";
import React from "react";
import "./Card.css";

export default function Card({ cardID, cardClass, children }) {
  return (
    <div className={`card mb-3 ${cardClass}`} id={cardID}>
      <div className="card-body">{children}</div>
    </div>
  );
}
