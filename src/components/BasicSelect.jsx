import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className='h-32 mx-8 my-8'>
        <Box style={{width: 240}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
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
}