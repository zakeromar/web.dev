'use client';
import React from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Checkboxes from './cheackBox/CheckBox';
import RadioButtons from './RadioButton/RadioButtons';
import Switche from './Switche/Switche';
import CustomChip from './Chip/Chip';
import DynamicTabs from '../Tab/Tab';
import Textarea from '../TextAreaCustome/TextAreaCustome';
import UseModal from '../Modal/UseModal'
import LabelBottomNavigation from '../NavigationBar/NavigationBar'
import Counter from './Counter/Counter';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const Main = () => {
  const tabLabels = ['عنوان تب ۱', 'عنوان تب ۲', 'عنوان تب ۳', 'عنوان تب ۴']; // Define your tab labels
  const navigationItems = [
    {
      label: 'خانه',
      value: 'HomeIcon',
      icon: <HomeOutlinedIcon />,
    },
    {
      label: 'کشف کن',
      value: 'discover',
      icon: <MapOutlinedIcon />,
    },
    {
      label: 'ببین',
      value: 'see',
      icon: <TravelExploreIcon />,
    },
    {
      label: 'علاقه مندی',
      value: 'favorite',
      icon: <FavoriteBorderIcon />,
    },
    {
      label: 'بیشتر',
      value: 'more',
      icon: <MoreHorizIcon />,
    },
  ];
  return (

    <>
      {/* all components */}
      <UseModal />
      <Textarea />
      <DynamicTabs tabLabels={tabLabels} />
      <Checkboxes />
      <RadioButtons />
      <Switche />
      <CustomChip icon={<TagFacesIcon />} />
      <Counter disabled={false} />
      <LabelBottomNavigation navigationItems={navigationItems} />
      
    </>

  );
};

export default Main;
