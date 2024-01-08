import React from 'react';
import { Drawer, Stack, Typography, Box, ButtonBase, Card, Avatar } from '@mui/material';
import { useTheme } from '@emotion/react';
// import { useDispatch } from 'react-redux';
import { Person } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const SideNavButton = ({ children, icon, onClick }) => (
  <ButtonBase
    sx={{
      alignItems: 'center',
      borderRadius: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      pl: '16px',
      pr: '16px',
      py: '10px',
      textAlign: 'left',
      width: '100%',
      fontSize: '16px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
      },
    }}
    onClick={onClick}
  >
    {icon && React.isValidElement(icon) && (
      <span style={{ marginRight: '8px', fontSize: 'small' }}>{icon}</span>
    )}    <Typography>{children}</Typography>
  </ButtonBase>
);

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
            <SettingsIcon color='white'/>
          </Box>
          <Card sx={{p: 3, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 6}}>
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
          <Card sx={{p: 3, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 6}}>
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
          <Card sx={{p: 3, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 6}}>
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
          <Card sx={{p: 3, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 6}}>
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
        </Stack>
      </Box>
      <Card sx={{p: 3, display: 'flex', alignItems: 'center', flexDirection:'reverse', gap: 2, borderRadius: 0, justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
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
    </Drawer>
  );
}

export default SideNav;