import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseableCard from './Modal';
import styles from './Modal.module.scss'
export default function UseModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
         <Button onClick={handleOpen} variant='contained'>مدال</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.useModalContainer }>
                    <CloseableCard  textContent=' در صورت درخواست جدید کارت فعلی شما مسدود خواهد شد و هزینه صدور و ارسال کارت جدید  دریافت میشود . آیا تمایل به ثبت در خواست جدید دارید ؟' headerContent='تیتر اصلی '
                    
                    closeFunction={handleClose} // Pass handleClose as a prop
                    />

                </Box>
            </Modal>
        </>
    );
}