import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Person from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserInfoCard = () => {
    return (
        <Card sx={{ p: 3, display: 'flex', alignItems: 'center', flexDirection: 'reverse', gap: 2, borderRadius: 0, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Avatar>
                    <Person />
                </Avatar>
                <Stack>
                    <Typography>
                        Dan Nguyen
                    </Typography>
                    <Typography variant='overline'>
                        test@test.com
                    </Typography>
                </Stack>
            </Box>
            <MoreVertIcon />
        </Card>
    );
};

export default UserInfoCard;
