import React, { useState } from 'react';
import { Box, Typography, Card, Stack, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@emotion/react';

function TopNav() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        component='header'
        sx={{
          position: 'sticky',
          left: '400px',
          width: 'calc(100% - 400px)',
          top: 0,
        }}
      >
        <Card
          sx={{
            p: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Typography variant='h5'>Albert Einstein</Typography>
            <Typography variant='overline'>January 7, 2023</Typography>
          </Stack>
          <IconButton onClick={handleClick} sx={{color: 'black'}}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>
        </Card>
      </Box>
    </>
  );
}

export default TopNav;
