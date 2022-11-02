import React from "react";

import "./List.css";

export default function List({ listID, children }) {
  return (
    <div id={listID} className="list-group">
      {children}
    </div>
  );
}
