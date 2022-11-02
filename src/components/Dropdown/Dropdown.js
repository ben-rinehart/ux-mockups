import Button from "../Button";
import Link from "../Link";
import DropdownItems from "./DropdownItems";
import React, { useRef, useEffect, useState } from "react";
import "./Dropdown.css";
import "../../static/fonts/font-awesome-6/css/all.css";

export default function Dropdown(props) {
  const [selected, toggleSelected] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          toggleSelected(selected);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function renderSwitch(dropdown) {
    switch (dropdown) {
      case "button":
        return <Button {...props} onClick={() => toggleSelected(!selected)} />;
      case "link":
        return <Link {...props} onClick={() => toggleSelected(!selected)} />;
      default:
        return null;
    }
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div
      className={`dropdown ${props.dropdownClass}`}
      id={props.dropdownID}
      ref={wrapperRef}
    >
      {renderSwitch(props.dropdownType)}

      <DropdownItems {...props} isDropdownOpen={selected} />
    </div>
  );
}
