export const typography = {
  fontFamily:
    '"Inter", "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  h1: {
    fontFamily:
      '"Inter", "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '3.5rem',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    lineHeight: 1.1,
  },
  h2: {
    fontFamily:
      '"Inter", "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '2.25rem',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.2,
  },
  h3: {
    fontFamily:
      '"Inter", "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.01em',
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
