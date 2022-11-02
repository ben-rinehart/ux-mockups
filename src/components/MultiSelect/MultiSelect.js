import PropTypes from "prop-types";
import React, { useState } from "react";
import Select from "react-select";

import "./MultiSelect.css";

export default function MultiSelect({
  selectOptions,
  selectLoading,
  isMulti,
  isOpen,
  isLoading,
  onInputChange,
  selectValue,
  selectKey,
  selectFilterOption
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Select
      value={selectedOption}
      onChange={setSelectedOption}
      options={selectOptions}
      className="csg-select"
      classNamePrefix="csg-select"
      isMulti={isMulti}
      menuIsOpen={isOpen}
      isLoading={isLoading}
      key={selectKey}
      onInputChange={onInputChange}
      inputValue={selectValue}
      filterOption={selectFilterOption}
    />
  );
}