export const typography = {
  fontFamily:
    '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  h1: {
    fontFamily:
      '"Sora", "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '2.9rem',
    fontWeight: 700,
    letterSpacing: '-0.035em',
  },
  h2: {
    fontFamily:
      '"Sora", "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '2.1rem',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily:
      '"Sora", "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  body2: {
    fontSize: '0.9rem',
    lineHeight: 1.7,
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    letterSpacing: '0.02em',
  },
} as const;

export type AppTypography = typeof typography;
