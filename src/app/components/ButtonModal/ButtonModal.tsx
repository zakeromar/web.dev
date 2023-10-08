import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import styles from './ButtonModal.module.scss'
interface CustomButtonModal {
  variantButton?: string;
  iconStart: React.ReactNode; // Specify the type as React.ReactNode
  iconEnd: React.ReactNode; // Specify the type as React.ReactNode
}

const ButtonModal = ({variantButton="contained",iconStart,iconEnd}: CustomButtonModal) => {
  const buttonStyle = variantButton === "contained" ? styles.ButtonModalcontained : styles.ButtonModaloutlined;

    return (
        <Button className={buttonStyle} variant={variantButton} startIcon={iconStart}  endIcon={iconEnd}>
       
       <Typography variant='caption' p={1}>متن دکمه </Typography>
      </Button>
    );
};

export default ButtonModal;