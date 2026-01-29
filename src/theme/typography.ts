export const typography = {
  fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  h1: {
    fontSize: '2.75rem',
    fontWeight: 700,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
  },
} as const;

export type AppTypography = typeof typography;
