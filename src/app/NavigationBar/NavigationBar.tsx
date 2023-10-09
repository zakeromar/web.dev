import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styles from './NavigationBar.module.scss';
type NavigationItem = {
    label: string;
    value: string;
    icon: JSX.Element;
};

interface LabelBottomNavigationProps {
    navigationItems: NavigationItem[];
}
export default function LabelBottomNavigation({ navigationItems }: LabelBottomNavigationProps) {
    const [value, setValue] = useState('recents');
    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };
    const navigationItemStyles = (currentValue: string, itemValue: string) => ({
        color: '#D8D8D8',
        backgroundColor: currentValue === itemValue ? '#F2F2F2' : 'transparent',
    });
    return (
        <BottomNavigation className={styles.BottomNavigationStyle} value={value} onChange={handleChange}>
            {navigationItems.map((item) => (
                <BottomNavigationAction
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    icon={item.icon}
                    className={styles.BottomNavigationStyle}
                    sx={navigationItemStyles(value, item.value)}
                />
            ))}
        </BottomNavigation>
    );
}
