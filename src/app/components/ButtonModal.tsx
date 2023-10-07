import React from 'react';
import { Button, Stack } from '@mui/material';
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
        متن دکمه
      </Button>
    );
};

export default ButtonModal;