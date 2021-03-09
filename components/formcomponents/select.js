import { Select as MuiSelect, MenuItem ,FormControl, InputLabel} from "@material-ui/core";
import React from "react";

export default function Select2(props) {
  const {  name, value, onChange ,items, label} = props;

  return (
    <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <MuiSelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={onChange}
          label={label}
        >
          {
              items.map((item,index) => (
                <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
              ))
          }
         
         
        </MuiSelect>
      </FormControl>
    
  );
}
