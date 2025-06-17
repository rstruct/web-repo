import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03294e',
      light: '#e3e7ec', // Lighter shade for hover effects
      dark: '#021936', // Darker shade for active states
    },
    secondary: {
      main: '#d6a015',
      light: '#fff5c1', // Lighter shade for hover effects
      dark: '#b37a09', // Darker shade for active states
    },
    background: {
      default: '#f5f5f5', // Light background
      paper: '#ffffff', // White background for paper components
    },
    text: {
      primary: '#03294e', // Darker text for readability
      secondary: '#021936', // Chocolate color for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: '#d6a015', // Construction orange color for headings
    },
    h2: {
      color: '#d6a015',
    },
    h3: {
      color: '#d6a015',
    },
    h4: {
      color: '#d6a015',
    },
    h5: {
      color: '#d6a015',
    },
    h6: {
      color: '#d6a015',
    },
    body1: {
      color: '#03294e', // Darker text for readability
    },
    body2: {
      color: '#d6a015',
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