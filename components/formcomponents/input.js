import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { variant, name, label, value, onChange,type } = props;

  return (
    <TextField
      variant={variant}
      label={label}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
}
