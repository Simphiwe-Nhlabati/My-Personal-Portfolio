import React from 'react';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        /* subtle decorative gradient orbs */
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(143,155,255,0.12) 0%, transparent 70%)',
          top: -120,
          right: -120,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,160,220,0.10) 0%, transparent 70%)',
          bottom: -80,
          left: -80,
          pointerEvents: 'none',
        },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
        >
          {/* Left: text + CTAs */}
          <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
            <Typography
              className="fade-in"
              variant="overline"
              sx={{ letterSpacing: '0.16em', color: 'text.secondary' }}
            >
              FULL-STACK SOFTWARE ENGINEER
            </Typography>
            <Typography
              className="fade-in-delay-1"
              variant="h1"
              sx={{ mt: 1.5, mb: 2.5, lineHeight: 1.1 }}
            >
              Hi, I&apos;m
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #8F9BFF 0%, #C9A0DC 60%, #A87ABF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Simphiwe Nhlabati
              </Box>
            </Typography>
            <Typography
              className="fade-in-delay-2"
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 520, mb: 4, lineHeight: 1.75 }}
            >
              I specialize in architecting scalable, type-safe applications using the TypeScript
              and Python ecosystems. By integrating AI workflows into the development lifecycle,
              I accelerate delivery without compromising code integrity.
            </Typography>

            <Stack className="fade-in-delay-3" direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button onClick={() => navigate('/projects')} endIcon={<ArrowRight size={18} />}>
                View Projects
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  borderColor: 'rgba(143,155,255,0.4)',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'rgba(143,155,255,0.06)',
                  },
                }}
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
            </Stack>
          </Box>

          {/* Right: code window illustration */}
          <Box className="fade-in-delay-2" sx={{ flex: 1, width: '100%', position: 'relative', zIndex: 1 }}>
            <Paper
              elevation={0}
              sx={{
                maxWidth: 520,
                mx: { xs: 'auto', md: 0 },
                borderRadius: 3,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 8px 40px rgba(143,155,255,0.10)',
                '&:hover': {
                  boxShadow: '0 12px 48px rgba(143,155,255,0.18)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {/* Window title bar */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1.25,
                  bgcolor: '#1A1B2E',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                  <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
                ))}
                <Typography
                  variant="caption"
                  sx={{ ml: 1.5, color: 'rgba(255,255,255,0.45)', fontSize: 12 }}
                >
                  portfolio.ts
                </Typography>
              </Box>

              {/* Code body */}
              <Box
                sx={{
                  bgcolor: '#0B1120',
                  color: '#E5E7EB',
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                  fontSize: 13,
                  lineHeight: 1.7,
                  p: 2.5,
                  minHeight: 240,
                }}
              >
                <Typography component="pre" sx={{ m: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}>
                  {`interface Engineer {
  name: string;
  location: string;
  stack: string[];
}

const simphiwe: Engineer = {
  name: "Simphiwe Nhlabati",
  location: "South Africa",
  stack: [
    "Python", "Django", "TypeScript",
    "React", "NestJS", "Express.js",
    "Docker", "PostgreSQL"
  ],
};

console.log(simphiwe.name);   // Ready to build.`}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
