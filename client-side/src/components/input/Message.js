import React from "react";

export default function Message(props) {
  const { name, placeholder, change, value } = props
  return (
    <div className="speech-bubble col-8">
      <div className="input-group">
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          aria-describedby="button-addon2"
          required={true}
          className="form-control border-2 py-4 bg-light"
          onChange={change}
          value={value}
        />
      </div>
    </div>
  );
}
