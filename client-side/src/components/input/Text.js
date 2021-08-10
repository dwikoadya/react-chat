import React from "react";

export default function Text(props) {
  const { name, id, label, value, onChange, error } = props
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      <div className="text-danger">{error}</div>
    </div>
  );
}
