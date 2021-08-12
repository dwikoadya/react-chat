import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copright © "}
      <Link color="inherit" href="https://github.com/dwikoadya" target="_blank" rel="noopener">
        Dwiko Adya Maulana
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography> 
  );
}
