import React from "react";

import "./List.css";

export default function List({ listID, isListFlush, isHorizontal, children }) {
  return (
    <div id={listID} className={`
      list-group 
      ${isListFlush ? "list-group-flush" : ""}
      ${isHorizontal ? "list-group-horizontal" : ""}
    `}>
      {children}
    </div>
  );
}
