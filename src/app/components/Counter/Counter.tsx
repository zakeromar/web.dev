import React, { useState } from 'react';
import { Stack, styled, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const IconButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(0),
    minWidth: 'auto',
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1),
}))

interface PassengerCounterProps{
    disabled?: boolean

}
export default function Counter<T extends string>({ disabled }: PassengerCounterProps) {
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        setValue(value - 1)
    }
    return (
        <Stack flexDirection={'row'} justifyContent={'space-evenly'} gap={3.5}>
            <IconButton size="small" variant="contained" onClick={increment} disabled={disabled}>
                <AddIcon />
            </IconButton>
            <Typography>{value}</Typography>
            <IconButton disabled={value === 0} size="small" variant="contained" onClick={decrement}>
                <RemoveIcon />
            </IconButton>
        </Stack>
    );
};

