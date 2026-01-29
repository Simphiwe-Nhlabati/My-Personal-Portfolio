import React from 'react';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          {/* Left: text + CTAs */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: '0.16em', color: 'text.secondary' }}
            >
              FULL-STACK SOFTWARE ENGINEER
            </Typography>
            <Typography variant="h1" sx={{ mt: 1, mb: 2, lineHeight: 1.1 }}>
              Hi, I&apos;m
              <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
                Simphiwe Nhlabati
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mb: 3 }}>
              Full-Stack Software Engineer &amp; AI-Augmented Developer. I specialize in architecting
              scalable, type-safe applications using the TypeScript and Python ecosystems. By
              integrating AI workflows into the development lifecycle, I accelerate delivery
              without compromising code integrity. I am driven by technical rigor, a passion for clean
              architecture, and a commitment to continuous evolution in the face of emerging
              technologies.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button onClick={() => navigate('/contact')}>
                Contact Me
              </Button>
              <Button
                color="secondary"
                sx={{
                  bgcolor: 'rgba(201,160,220,0.16)',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(201,160,220,0.28)',
                  },
                }}
                onClick={() => navigate('/projects')}
              >
                View Projects
              </Button>
            </Stack>
          </Box>

          {/* Right: code window illustration */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <Paper
              elevation={3}
              sx={{
                maxWidth: 520,
                mx: { xs: 'auto', md: 0 },
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  bgcolor: 'rgba(240,248,255,0.9)',
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: '#FF5F57',
                  }}
                />
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: '#FFBD2E',
                  }}
                />
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: '#28C840',
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ ml: 1, color: 'text.secondary' }}
                >
                  full-stack_software_engineer_portfolio.ts
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: '#0B1120',
                  color: '#E5E7EB',
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: 13,
                  p: 2.5,
                  minHeight: 220,
                }}
              >
                <Typography component="pre" sx={{ m: 0, whiteSpace: 'pre-wrap' }}>
                  {`# Full-Stack Software Engineer Portfolio

class FullStackSoftwareEngineerPortfolio {

  name: string;
    location: string;
  skills: string[];

  constructor(name: string, location: string, skills: string[]) {
    this.name = name;
    this.location = location;
    this.skills = skills;
  }    def __init__(self):

FullStackSoftwareEngineerPortfolio = new FullStackSoftwareEngineerPortfolio("Simphiwe Nhlabati", 
"South Africa", 
["Python", "Django", "APIs", "TypeScript", "NestJS", "Express.js", "React", "Bun.js"]);

console.log(FullStackSoftwareEngineerPortfolio.name);
console.log(FullStackSoftwareEngineerPortfolio.location);
console.log(FullStackSoftwareEngineerPortfolio.skills);`}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
