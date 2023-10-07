'use client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Stack } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ButtonModal from './ButtonModal'
import styles from './Modal.module.scss'
import Image from 'next/image';
interface CustomCard {
  imgUrl?: string;
  textContent: string;
  headerContent: string;
}

function CloseableCard({ imgUrl = '', textContent, headerContent }: CustomCard) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

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
            <Typography my={2} variant="body2" color="text.secondary" textAlign='justify'>
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
