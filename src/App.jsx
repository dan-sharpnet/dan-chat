import { useState } from 'react'
import { Box, Card, Grid, TextField, IconButton, Typography, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';  // Import the send icon
import './App.css'
import SideNav from './layouts/main/SideNav'
import TopNav from './layouts/main/TopNav'
import { useTheme } from '@emotion/react'
import { Person } from '@mui/icons-material';


function App() {
  const theme = useTheme()

  return (
    <>
      <TopNav />
      <SideNav />
      <Box
        sx={{
          flex: 1,
          pl: '400px', 
        }}
      >
        <Box
          sx={{
            m: 3,
            display: 'flex',
            gap: 3,
            alignItems: 'flex-end'
          }}
        >
          <Person />
        <Card
          sx={{
            width: '200px',
            p: 3,
            display: 'flex',
          }}
        >
          Hi!
        </Card>
        </Box>
        <Box
          sx={{
            m: 3,
            display: 'flex',
            flexDirection: 'row-reverse',
            gap: 3,
            alignItems: 'flex-end'
          }}
        >
          <Person />
        <Card
          sx={{
            width: '200px',
            p: 2,
            display: 'flex',
          }}
        >
          <Stack>
            Howdy!
            <Typography variant='overline'>
              12:34 AM
            </Typography>
          </Stack>
        </Card>
        </Box>
         <Box
              sx={{
                p: 3,
                position: 'absolute',
                left: '400px',
                width: 'calc(100% - 400px)',
                bottom: 0,
                display: 'flex'
              }}
            >
              <Card sx={{width: '100%', display: 'flex', p: 2, borderRadius: 6}}>
                <TextField sx={{ width: 'calc(100% - 40px)', marginRight: '10px' }} />
                <IconButton color="primary" aria-label="Send">
                  <SendIcon />
                </IconButton>
              </Card>
              </Box>
      </Box>
    </>
  )
}

export default App
