import React, { useState } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField'
import styles from './TextAreaCustome.module.scss'
function MyTextarea() {
    const theme = useTheme();
    const [count, setCount] = useState<number>(0);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    
    return (
            <Stack className={styles.parentStackStyle}>
                <TextField
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setCount(event.target.value.length);
                    }}
                    id="outlined-textarea"
                    label="عنوان"
                    multiline
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <Stack py={1} className={styles.styleHelperText} ><Typography fontSize='12px'>متن راهنما</Typography><Typography fontSize='12px'>{`100 / ${count}`}</Typography></Stack>
            </Stack>
      
    );
}

export default MyTextarea;
