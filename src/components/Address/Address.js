import React from "react";

import "./Address.css";

export default function Address() {
  return (
    <div className="form-group">
      <label>Address</label>
      <input type="text" className="form-control input-group-top"  />
      <input type="text" className="form-control input-group-bottom" />
    </div>
  );
}