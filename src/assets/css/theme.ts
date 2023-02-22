import { createTheme } from '@mui/material/styles';

const colors = { primary: '#000' };

const Theme = createTheme({
  palette: {
    primary: { main: colors.primary },
  },
  typography: { fontFamily: 'Poppins' },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiIcon: {
      defaultProps: { color: 'primary' },
    },
  },
});

export default Theme;
