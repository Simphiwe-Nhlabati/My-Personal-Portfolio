export const palette = {
  background: {
    default: '#F0F8FF', // Alice Blue
    paper: '#FFFFFF',
  },
  primary: {
    main: '#8F9BFF', // Periwinkle
    light: '#B0B8FF',
    dark: '#6A74CC',
  },
  secondary: {
    main: '#C9A0DC', // Wisteria
    light: '#DCB9E8',
    dark: '#A87ABF',
  },
  text: {
    primary: '#192132',
    secondary: '#4F5B73',
  },
  divider: '#E0E6F5',
} as const;

export type AppPalette = typeof palette;
