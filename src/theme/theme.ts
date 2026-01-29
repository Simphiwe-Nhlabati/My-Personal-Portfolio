import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette: {
    background: {
      default: palette.background.default,
      paper: palette.background.paper,
    },
    primary: {
      main: palette.primary.main,
      light: palette.primary.light,
      dark: palette.primary.dark,
    },
    secondary: {
      main: palette.secondary.main,
      light: palette.secondary.light,
      dark: palette.secondary.dark,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
    },
    divider: palette.divider,
  },
  typography: {
    fontFamily: typography.fontFamily,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    body1: typography.body1,
    body2: typography.body2,
    button: typography.button,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});
