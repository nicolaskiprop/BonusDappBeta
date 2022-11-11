import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid, Stack } from '@mui/material';
import InputAdornments from '../inputfield/Addressfield';
import Addbtn from '../Buttons/Add/Add';
import Importbtn from '../Buttons/import/import';
import CustomizedTables from '../Table/CustomizedTables';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box m={3}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="buttons">

                    <Tab label="Send BNB" {...a11yProps(0)} />
                    <Tab label="Send Other Tokens" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Grid container alignItems='center'>
                    <Grid item xs={8} sm={6} >
                        <Stack>
                            <Typography display='flex' justifyContent='flex-start' m={1}>Address</Typography>
                            <InputAdornments />
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sm={3} >
                        <Stack>
                            <Typography display='flex' justifyContent='flex-start' m={1}>Amount</Typography>
                            <InputAdornments />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box
                            display='flex'
                            alignItems='center'
                            gap={1}
                            sx={{ justifyContent: { xs: 'space-around', sm: 'none !important' } }}
                        >
                            <Addbtn />
                            <Importbtn />
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <CustomizedTables />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                    <Stack>
                            <Typography display='flex' justifyContent='flex-start' m={1}>Contract Address</Typography>
                            <InputAdornments />
                        </Stack> 
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8} sm={6} >
                        <Stack>
                            <Typography display='flex' justifyContent='flex-start' m={1}>Address</Typography>
                            <InputAdornments />
                        </Stack>
                    </Grid>
                    <Grid item xs={4} sm={3} >
                        <Stack>
                            <Typography display='flex' justifyContent='flex-start' m={1}>Amount</Typography>
                            <InputAdornments />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box
                            display='flex'
                            alignItems='center'
                            gap={1}
                            sx={{ justifyContent: { xs: 'space-around', sm: 'none !important' } }}
                        >
                            <Addbtn />
                            <Importbtn />
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <CustomizedTables />
                </Box>
            </TabPanel>

        </Box>
    );
}
