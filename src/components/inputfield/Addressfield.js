import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';


export default function InputAdornments() {

  return (
    <Box sx={{ display: 'flex' }}>

        
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" size='small'>
          <OutlinedInput
            id="outlined-adornment-weight"
          />   
        </FormControl>
       
   
    </Box>
  );
}