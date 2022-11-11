import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function Addbtn() {
  return (
    <Stack direction="row" spacing={2}  mt={5}>
           <Button 
           variant="contained"
           sx={{ backgroundColor:'#86d12b'}} 
           endIcon={<AddIcon />}
           >
        Add
      </Button>
    </Stack>
  );
}