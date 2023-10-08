
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import WifiFindIcon from '@mui/icons-material/WifiFind';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './NavigationBar.module.scss'
export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation className={styles.BottomNavigationStyle} value={value} onChange={handleChange}>
            {/* There is a duplicate code here, it should be corrected */}
            <BottomNavigationAction
                label="خانه"
                value="HomeIcon"
                icon={<HomeIcon />}
                className={styles.BottomNavigationStyle}
                sx={{
                    backgroundColor: value === 'HomeIcon' ? '#F2F2F2' : 'transparent',
                }}

            />
            <BottomNavigationAction
                label="کشف کن "
                value="discover"
                icon={<WifiFindIcon />}
                className={styles.BottomNavigationStyle}
                sx={{
                    backgroundColor: value === 'discover' ? '#F2F2F2' : 'transparent',
                }}
            />
            <BottomNavigationAction
                label="ببین"
                value="see"
                icon={<TravelExploreIcon />}
                className={styles.BottomNavigationStyle}
                sx={{
                    backgroundColor: value === 'see' ? '#F2F2F2' : 'transparent',
                }}
            />
            <BottomNavigationAction
                label="علاقه مندی"
                value="favorite"
                icon={<FavoriteBorderIcon />}
                className={styles.BottomNavigationStyle}
                sx={{
                    backgroundColor: value === 'favorite' ? '#F2F2F2' : 'transparent',
                }}
            />
            <BottomNavigationAction
                label="بیشتر"
                value="more"
                icon={<MoreHorizIcon />}
                className={styles.BottomNavigationStyle}
                sx={{
                    backgroundColor: value === 'more' ? '#F2F2F2' : 'transparent',
                    
                }}
            />

        </BottomNavigation>
    );
}


