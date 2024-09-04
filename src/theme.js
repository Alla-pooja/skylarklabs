
import { createTheme } from '@mui/material';
import { indigo, orange, red } from '@mui/material/colors';

const themeOptions = {
  palette: {
    mode: "light", // Changed "type" to "mode" in MUI v5
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: orange[500],
    },
    error: {
      main: red[500],
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

export const Theme = createTheme({
  ...themeOptions,
});

export const FooterTheme = createTheme({
  ...themeOptions,
  palette: {
    mode: "dark", // Changed "type" to "mode" in MUI v5
  },
});
