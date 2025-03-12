import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D78509', // Construction orange color
    },
    secondary: {
      main: '#6f4c3e', // Chocolate color
    },
    background: {
      default: '#f5f5f5', // Light background
      paper: '#ffffff', // White background for paper components
    },
    text: {
      primary: '#333', // Darker text for readability
      secondary: '#6f4c3e', // Chocolate color for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: '#D78509', // Construction orange color for headings
    },
    h2: {
      color: '#D78509',
    },
    h3: {
      color: '#D78509',
    },
    h4: {
      color: '#D78509',
    },
    h5: {
      color: '#D78509',
    },
    h6: {
      color: '#D78509',
    },
    body1: {
      color: '#333', // Darker text for readability
    },
    body2: {
      color: '#333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#D78509', // Construction orange color for buttons
          color: 'white',
          '&:hover': {
            backgroundColor: '#b56907', // Darker construction orange on hover
          },
        },
      },
    },
  },
});

export default theme;