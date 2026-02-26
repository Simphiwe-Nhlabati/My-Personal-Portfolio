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
    success: palette.success,
    warning: palette.warning,
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
    borderRadius: 16,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 20px 60px -12px ${palette.primary.glow}`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: 'all 0.25s ease',
          '&:hover': {
            transform: 'scale(1.08)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            transition: 'all 0.25s ease',
          },
        },
      },
    },
  },
});
