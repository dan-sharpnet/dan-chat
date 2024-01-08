import { createTheme } from '@mui/material/styles';

const theme = createTheme({  
    palette: {
    type: 'light',
    primary: {
      main: '#39375b',
    },
    secondary: {
      main: '#c14953',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default theme