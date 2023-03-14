import React from "react";
import { useField } from "formik";
import MuiTypography from "./MuiTypography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CustomSelectFields = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <InputLabel id="demo-simple-select-label">City</InputLabel>
      <Select {...field} {...props}>
        <MenuItem value="Guj">Gujranwala</MenuItem>
        <MenuItem value="Lahore">Lahore</MenuItem>
        <MenuItem value="Multan">Multan</MenuItem>
        <MenuItem value="Isb">Islamabad</MenuItem>
        <MenuItem value="Peshawar">Peshawar</MenuItem>
        <MenuItem value="Sialkot">Sialkot</MenuItem>
      </Select>
      {meta.touched && meta.error ? (
        <MuiTypography
          text={meta.error}
          variant="subtitle2"
          component="h6"
          sx={{ color: "rgb(255, 51, 102)" }}
        />
      ) : null}
    </>
  );
};

export default CustomSelectFields;
