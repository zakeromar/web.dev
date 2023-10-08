'use client';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';

interface CustomChipProps {
    disable?: boolean;
    icon: React.ReactNode;
}

export default function CustomChip({ disable = false, icon }: CustomChipProps) {

    const handleClick = () => {
    };
    return (
        <Stack direction="row" spacing={1}>
            <Chip
                disabled={disable}
                label="عنوان"
                onClick={handleClick}
                sx={{
                    '&:focus': {
                        color: 'black',
                        borderColor: 'black',
                    },
                }}
                variant="outlined"
                icon={
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                }
            />
        </Stack>
    );
}

