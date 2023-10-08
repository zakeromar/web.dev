'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Tab.module.scss'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

interface DynamicTabsProps {
    tabLabels: string[];
}

export default function DynamicTabs({ tabLabels }: DynamicTabsProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const tabs = tabLabels.map((label, index) => (
        <Tab label={label} {...a11yProps(index)} key={index} />
    ));

    const tabPanels = tabLabels.map((label, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
            {label}
        </CustomTabPanel>
    ));

    return (
        <Box>
            <Box className={styles.ParanteBox}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="dynamic tabs"
                    textColor="inherit"
                    className={styles.TabIndicatorBackground}
                     
                >
                    {tabs}
                </Tabs>
            </Box>
            {tabPanels}
        </Box>
    );
}
