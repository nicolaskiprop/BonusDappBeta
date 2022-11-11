import React from 'react'
import { Box, Card, Container, Stack, Typography } from '@mui/material'
import { borderColor } from '@mui/system'
import LabTabs from '../Tabs/Tabs'

function Cardarea() {
    return (
        <Box display='flex' justifyContent='center'>
            <Container maxWidth='lg'>
                <Card sx={{ml: 2, mr: 2,  borderRadius:'20px' }} elevation={5}>
                    <Box display='flex' sx={{borderBottom:1, borderColor: 'divider'}} m={3} pb={3}>
                        <Stack>
                            <Typography display='flex' justifyContent='flex-start' sx={{color:'#999', fontWeight:'bold'}}>Account</Typography>
                            <Typography display='flex' justifyContent='flex-start' sx={{color:'#999', fontWeight:'bold'}}>0x255325572D2362EaBab0C54D5ca2D69B587AA389</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <LabTabs />
                    </Box>
                    <Box>

                    </Box>
                </Card>
            </Container>
        </Box>
    )
}

export default Cardarea