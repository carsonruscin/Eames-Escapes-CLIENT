import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
      primary: {
        main: '#00796b', // Primary Green
      },
      secondary: {
        main: '#00796b', // Secondary Green
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
      },
      // Add more typography variants as needed
    },
    // More custom stuff here
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: '0 !important',
                    overflow: 'hidden',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    padding: '0 !important',
                },
            },
            defaultProps: {
                disableGutters: true,
            },
        },
    },
  });