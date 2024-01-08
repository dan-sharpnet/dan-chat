import React from 'react';
import { Drawer, Stack, Typography, Box, ButtonBase, Card, Avatar, SvgIcon } from '@mui/material';
import { useTheme } from '@emotion/react';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatPersonCard from './components/ChatPersonCard';
import UserInfoCard from './components/UserInfoCard';

function SideNav() {
  const theme = useTheme();
//   const dispatch = useDispatch();

  const handleClick = (menuItem) => {
    // dispatch(selectMenuItem(menuItem));
  };

  return (
    <Drawer
      anchor="left"
      open={true}
      variant="permanent"
      hideBackdrop={true}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.primary.main,
          width: 400,
          zIndex: 1,
          borderRight: 'none',
        },
      }}
    >
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
        }}
      >
        <Stack
          component="ul"
          spacing={2}
          sx={{
            p: 0,
            m: 0,
          }}
        >
          <Box sx= {{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline'
          }}>
            <Typography variant="h4" color='white'>
              DanChat
            </Typography>
            <SvgIcon sx={{color: 'white'}}>
              <SettingsIcon/>
            </SvgIcon>
          </Box>
          <ChatPersonCard />
          <ChatPersonCard />
          <ChatPersonCard />
          <ChatPersonCard />
          </Stack>
      </Box>
      <UserInfoCard />
    </Drawer>
  );
}

export default SideNav;