import React from "react";
import { Link } from "react-router-dom";

export default function ReminderRegister(props) {
  const { path } = props;
  return (
    <div>
      <p>
        <br />
        Doesn't have an account yet ? <Link to={path}> Register! </Link>
      </p>
    </div>
  );
}
