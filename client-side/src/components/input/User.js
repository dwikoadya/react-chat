import React from "react";

export default function Message(props) {
  const { name, id, placeholder, onChange, value } = props
  return (
    <div className="speech-bubble col-3">
      <div className="form-label-group mb-0">
        <input
          type="text"
          className="form-control border-2 py-4 bg-light"
          name={name}
          id={id}
          placeholder={placeholder}
          required={true}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
