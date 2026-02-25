export const palette = {
  background: {
    default: '#050616', // deep night purple
    paper: '#0B1024',
  },
  primary: {
    main: '#C4A5FF', // soft lavender
    light: '#E0C8FF',
    dark: '#8B5CF6',
  },
  secondary: {
    main: '#F472B6', // orchid pink
    light: '#F9A8D4',
    dark: '#DB2777',
  },
  text: {
    primary: '#E5E7FF',
    secondary: '#A5B4FC',
  },
  divider: '#272A45',
} as const;

export type AppPalette = typeof palette;
