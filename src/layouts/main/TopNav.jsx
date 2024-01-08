import { Box, Typography, Card, Stack } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'
import MoreVertIcon from '@mui/icons-material/MoreVert';


function TopNav() {
    const theme = useTheme()
  return (
    <>
        <Box
            component='header'
            sx ={{
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
                        alignItems: 'center'
                    }}
                >
                    <Stack>
                    <Typography variant='h5'>
                        Albert Einstein
                    </Typography>
                    <Typography variant='overline'>
                        January 7, 2023
                    </Typography>
                    </Stack>
                    <MoreVertIcon />
                </Card>
        </Box>
    </>
  )
}

export default TopNav