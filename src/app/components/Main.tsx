'use client';
import React from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Checkboxes from './cheackBox/CheckBox';
import ColorRadioButtons from './RadioButton/RadioButtons';
import Switche from './Switche/Switche';
import CustomChip from './Chip/Chip';
import DynamicTabs from '../Tab/Tab';
import TextareaField from '../TextAreaCustome/TextAreaCustome';
import UseModal from '../Modal/UseModal'
import LabelBottomNavigation from '../NavigationBar/NavigationBar'
const Main = () => {
  const tabLabels = ['عنوان تب ۱', 'عنوان تب ۲', 'عنوان تب ۳', 'عنوان تب ۴']; // Define your tab labels

  return (

    <>
    {/* all components */}
      {/* <UseModal/>
      <TextareaField />
      <DynamicTabs tabLabels={tabLabels} />
      <Checkboxes />
      <ColorRadioButtons />
      <Switche />
      <CustomChip icon={<TagFacesIcon />} />
      <LabelBottomNavigation/> */}
    </>

  );
};

export default Main;
