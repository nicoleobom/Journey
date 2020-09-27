import React from "react";
import './index.css';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input input-style"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;