import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Person from '@mui/icons-material/Person';

const ChatPersonCard = () => {
    return (
        <Card sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 6 }}>
            <Avatar>
                <Person />
            </Avatar>
            <Stack>
                <Typography>
                    Albert Einstein
                </Typography>
                <Typography variant='overline'>
                    Jan 6, 2023
                </Typography>
            </Stack>
        </Card>
    );
};

export default ChatPersonCard;
