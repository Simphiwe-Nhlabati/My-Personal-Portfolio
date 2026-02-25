import React from 'react';
import { Box, Chip, Stack, Typography, Paper } from '@mui/material';
import { Container } from '../components/common/Container';

type IconSkill = {
  name: string;
  iconUrl?: string;
};

const languages: IconSkill[] = [
  {
    name: 'JavaScript',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Python',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'HTML',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
  },
  {
    name: 'CSS',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'SQL',
  },
];

const frontend: IconSkill[] = [
  {
    name: 'React',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'Material UI',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
  },
  {
    name: 'Tailwind CSS',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  },
];

const backend: IconSkill[] = [
  {
    name: 'Node.js',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    name: 'Django',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  },
  {
    name: 'PostgreSQL',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
  },
];

const renderIconRow = (items: IconSkill[]) => (
  <Stack direction="row" spacing={1.5} justifyContent="center" flexWrap="wrap">
    {items.map((skill) =>
      skill.iconUrl ? (
        <Box
          key={skill.name}
          component="img"
          src={skill.iconUrl}
          alt={skill.name}
          title={skill.name}
          sx={{
            width: 36,
            height: 36,
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.12))',
          }}
        />
      ) : (
        <Chip
          key={skill.name}
          label={skill.name}
          size="small"
          sx={{ borderRadius: 999 }}
        />
      ),
    )}
  </Stack>
);

export const Skills: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        <Stack spacing={4} alignItems="center">
          <Stack spacing={1} alignItems="center">
            <Typography
              variant="overline"
              sx={{ letterSpacing: '0.14em', color: 'text.secondary' }}
            >
              SKILLS
            </Typography>
            <Typography variant="h1" textAlign="center">
              The stack I work with most.
            </Typography>
          </Stack>

          <Stack spacing={3} sx={{ width: '100%', maxWidth: 720 }}>
            {/* Languages card (top) */}
            <Paper
              variant="outlined"
              sx={{
                borderRadius: 4,
                borderColor: 'divider',
                bgcolor: 'rgba(240,248,255,0.95)',
                p: 2.5,
              }}
            >
              <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 1.5 }}>
                Languages
              </Typography>
              {renderIconRow(languages)}
            </Paper>

            {/* Frontend + Backend row */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              alignItems="stretch"
            >
              <Paper
                variant="outlined"
                sx={{
                  flex: 1,
                  borderRadius: 4,
                  borderColor: 'divider',
                  bgcolor: 'rgba(240,248,255,0.9)',
                  p: 2.5,
                }}
              >
                <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 1.5 }}>
                  Frontend
                </Typography>
                {renderIconRow(frontend)}
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  flex: 1,
                  borderRadius: 4,
                  borderColor: 'divider',
                  bgcolor: 'rgba(240,248,255,0.9)',
                  p: 2.5,
                }}
              >
                <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 1.5 }}>
                  Backend
                </Typography>
                {renderIconRow(backend)}
              </Paper>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

