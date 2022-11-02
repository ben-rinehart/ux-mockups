import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Tooltip.css";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };
  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      <div
        className={`Tooltip-Tip ${props.tipDirection || "top"} ${
          active ? "show" : ""
        }`}
      >
        {props.tipText}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  tipDirection: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export default Tooltip;
