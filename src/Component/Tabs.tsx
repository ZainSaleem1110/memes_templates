import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Latest from './Latest'

function TabPanel(props:any) {
    const { children, value, index, ...other } = props;

    return (
        <Box
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
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index:any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box className="w-[100%] mt-10" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="The Latest" {...a11yProps(0)} />
                    <Tab label="Most Liked" {...a11yProps(1)} />
                    <Tab label="Most Viewed" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Latest/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}
