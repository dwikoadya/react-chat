import React from "react";
import { useState } from "react";

export default function Password(props) {
  const { name, id, label, value, onChange, error } = props;
  const [show, setShow] = useState(false);

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-group">
        <input
          className="form-control"
          name={name}
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
        />
        <div className="input group-append">
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="btn btn-primary"
          >
            {show ? (
              <i className="fa fa-eye-slash"></i>
            ) : (
              <i className="fa fa-eye"></i>
            )}
          </button>
        </div>
      </div>
      <div className="text-danger">{error}</div>
    </div>
  );
}
