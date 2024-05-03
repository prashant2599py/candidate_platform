import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import selectionBox from ".";

export default function BasicSelect() {
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className="flex my-8">
      {selectionBox && selectionBox.map((select) => {
          return (
            <div className="mx-2">
              <Box style={{ width: 240 }}>
                <FormControl fullWidth>
                  <InputLabel id={select.id}>{select.title}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          );
        })}
    </div>
  );
}
