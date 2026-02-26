export const palette = {
  background: {
    default: '#0a0a0f', // deep obsidian
    paper: '#12121a',
    elevated: '#1a1a25',
  },
  primary: {
    main: '#a78bfa', // electric violet
    light: '#c4b5fd',
    dark: '#7c3aed',
    glow: 'rgba(167, 139, 250, 0.5)',
  },
  secondary: {
    main: '#2dd4bf', // teal cyan
    light: '#5eead4',
    dark: '#14b8a6',
    glow: 'rgba(45, 212, 191, 0.4)',
  },
  accent: {
    main: '#f472b6', // hot pink
    light: '#f9a8d4',
    dark: '#ec4899',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#94a3b8',
    muted: '#64748b',
  },
  divider: '#1e293b',
  success: {
    main: '#4ade80',
  },
  warning: {
    main: '#fbbf24',
  },
} as const;

export type AppPalette = typeof palette;
