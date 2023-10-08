'use client';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ButtonModal from '../components/ButtonModal/ButtonModal'
import styles from './Modal.module.scss'
import Image from 'next/image';
interface CustomCard {
  imgUrl?: string;
  textContent: string;
  headerContent: string;
  closeFunction: any
}

function CloseableCard({ imgUrl = '', textContent, headerContent, closeFunction }: CustomCard) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    closeFunction(false);
  }



  return (
    <>
      {isOpen && (
        <Card className={styles.cardParent}>
          <IconButton
            edge="end"
            color="primary"
            aria-label="close"
            onClick={handleClose}
            dir='ltr'
            className={styles.styleIconButton}
          >
            <CloseIcon className={styles.iconStyle} />
          </IconButton>
          <CardContent>
            {imgUrl.length > 0 ? <Image
              src='' // Replace with the actual path to your image
              alt=''
              width={296}
              height={112}
            /> : <Stack className={styles.defaultPicture}></Stack>}
            <Typography textAlign='center' mt={1}>{headerContent}</Typography>
            <Typography my={2} variant="body2" color="text.secondary" textAlign='justify' dir='rtl'>
              {textContent}
            </Typography>
            <Stack display='flex' justifyContent='space-evenly' flexDirection='row' flexWrap='nowrap'>
              <ButtonModal variantButton='outlined' iconStart={<TagFacesIcon />} iconEnd={<TagFacesIcon />} />
              <ButtonModal variantButton='contained' iconStart={<TagFacesIcon />} iconEnd={<TagFacesIcon />} />
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default CloseableCard;
