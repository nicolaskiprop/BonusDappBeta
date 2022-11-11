import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import { Box, Modal, Typography } from '@mui/material';
import Sheets from '../../../assets/gs.png'
import InputAdornments from '../../inputfield/Addressfield';

const style = {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius:'10px'
}


export default function Importbtn() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Stack direction="row" spacing={2} mt={5}>
            <Button
                variant="contained"
                sx={{ backgroundColor:'#86d12b'}} 
                endIcon={<SouthWestIcon />}
                onClick={handleOpen}
            >
                Import
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ ...style, width: 300 }}>
                    <Box sx={{ maxHeight: "200px !important" }}>
                        <img src={Sheets} alt='google sheets' style={{ height: '96px' }} />
                    </Box>
                    <Box>
                        <Stack>
                            <Typography>Import from Google Sheets</Typography>
                            <Typography sx={{ color: '#999', fontSize: '13px' }}>Import addresses with Google sheet URL</Typography>
                            <InputAdornments />
                            <Button
                                variant="contained"
                                endIcon={<SouthWestIcon />}
                                onClick={handleOpen}
                                size='small'
                                m={1}
                                sx={{ p:1,backgroundColor:'#86d12b'}}
                            >
                                Import
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </Stack>
    );
}