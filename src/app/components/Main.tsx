'use client';
import React, { useRef, useState } from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Checkboxes from './CheckBox';
import ColorRadioButtons from './RadioButtons';
import Switche from './Switche';
import CustomChip from './Chip';
import CustomTabPanel from './Tab';
import DynamicTabs from './Tab';
import CloseableCard from './Modal';
import TextareaField from './TextAreaCustome';
import {MobileDatePicker} from '@mui/x-date-pickers'
import {StandardTextField} from './TextField'
import {InputAdornment, InputLabel, Stack, styled, Typography, useTheme} from '@mui/material'
 import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Main = () => {
  const tabLabels = ['عنوان تب ۱', 'عنوان تب ۲', 'عنوان تب ۳', 'عنوان تب ۴']; // Define your tab labels

  return (

    <>
      <TextareaField />
      <CloseableCard textContent=' در صورت درخواست جدید کارت فعلی شما مسدود خواهد شد و هزینه صدور و ارسال کارت جدید  دریافت میشود . آیا تمایل به ثبت در خواست جدید دارید ؟' headerContent='تیتر اصلی ' />
      <DynamicTabs tabLabels={tabLabels} />
      <Checkboxes />
      <ColorRadioButtons />
      <Switche />
      <CustomChip icon={<TagFacesIcon />} />
    </>

  );
};

export default Main;
