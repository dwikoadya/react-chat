import React from "react";

export default function Email(props) {
  const { name, id, label, value, onChange, error } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="email"
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
