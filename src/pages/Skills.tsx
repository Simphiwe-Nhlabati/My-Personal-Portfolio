import React from 'react';
import { Box, Chip, Stack, Typography, Paper, Avatar } from '@mui/material';
import { Container } from '../components/common/Container';

type Skill = {
  name: string;
  iconUrl?: string;
  level?: 'learning' | 'comfortable' | 'confident';
};

type SkillGroup = {
  title: string;
  subtitle: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Programming languages',
    subtitle: 'Core languages I use to express ideas and ship features.',
    skills: [
      {
        name: 'Python',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        level: 'confident',
      },
      {
        name: 'TypeScript',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        level: 'comfortable',
      },
      {
        name: 'JavaScript',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        level: 'comfortable',
      },
      {
        name: 'HTML',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
        level: 'confident',
      },
      {
        name: 'CSS',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        level: 'confident',
      },
      {
        name: 'SQL',
        level: 'comfortable',
      },
    ],
  },
  {
    title: 'Frameworks & libraries',
    subtitle: 'Tools I reach for to structure backends, frontends, and data access.',
    skills: [
      {
        name: 'Django',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
        level: 'confident',
      },
      {
        name: 'Django REST Framework',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg',
        level: 'confident',
      },
      {
        name: 'React',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
        level: 'comfortable',
      },
      {
        name: 'Node.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        level: 'comfortable',
      },
      {
        name: 'Express.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        level: 'comfortable',
      },
      {
        name: 'NestJS',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
        level: 'learning',
      },
      {
        name: 'Bun.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg',
        level: 'learning',
      },
      {
        name: 'Material UI',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
        level: 'comfortable',
      },
      {
        name: 'Tailwind CSS',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
        level: 'comfortable',
      },
      {
        name: 'Bootstrap',
        level: 'comfortable',
      },
      {
        name: 'Prisma ORM',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
        level: 'learning',
      },
      {
        name: 'TypeORM',
        level: 'learning',
      },
      {
        name: 'MySQL',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
        level: 'comfortable',
      },
      {
        name: 'MariaDB',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original-wordmark.svg',
        level: 'learning',
      },
      {
        name: 'PostgreSQL',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
        level: 'comfortable',
      },
    ],
  },
  {
    title: 'Other tools',
    subtitle: 'Ecosystem tools that support my day-to-day engineering work.',
    skills: [
      {
        name: 'Docker',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg',
        level: 'comfortable',
      },
      {
        name: 'Git',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
        level: 'comfortable',
      },
      {
        name: 'GitHub',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
        level: 'comfortable',
      },
      {
        name: 'VS Code',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
        level: 'confident',
      },
      {
        name: 'Postman',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
        level: 'comfortable',
      },
      {
        name: 'Supabase',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
        level: 'learning',
      },
      {
        name: 'Vite',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
        level: 'comfortable',
      },
      {
        name: 'npm',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
        level: 'comfortable',
      },
      {
        name: 'Axios',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg',
        level: 'comfortable',
      },
      {
        name: 'Jupyter',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg',
        level: 'learning',
      },
      {
        name: 'LinkedIn',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
      },
      {
        name: 'Zustand',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
        level: 'learning',
      },
      {
        name: 'Chart.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg',
        level: 'learning',
      },
    ],
  },
];

const levelChipConfig: Record<NonNullable<Skill['level']>, { label: string; color: 'default' | 'primary' | 'success' }> =
  {
    learning: { label: 'Learning', color: 'default' },
    comfortable: { label: 'Comfortable', color: 'primary' },
    confident: { label: 'Confident', color: 'success' },
  };

export const Skills: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        <Stack spacing={4}>
          {/* Intro */}
          <Stack spacing={1.5}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: '0.14em', color: 'text.secondary' }}
            >
              SKILLS
            </Typography>
            <Typography variant="h1">
              A practical view of my stack.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              Grouped by how you&apos;re likely to evaluate them: core languages, frameworks and
              libraries, and the tools I rely on to ship and maintain real systems.
            </Typography>
          </Stack>

          {/* Skill groups */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems="stretch"
          >
            {skillGroups.map((group) => (
              <Paper
                key={group.title}
                variant="outlined"
                sx={{
                  flex: 1,
                  p: 2.5,
                  borderRadius: 1,
                  borderColor: 'divider',
                  bgcolor: 'rgba(240,248,255,0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="h2" sx={{ fontSize: '1.25rem', mb: 0.5 }}>
                    {group.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {group.subtitle}
                  </Typography>
                </Box>

                <Stack spacing={1.25}>
                  {group.skills.map((skill) => {
                    const levelConfig = skill.level
                      ? levelChipConfig[skill.level]
                      : undefined;
                    return (
                      <Stack
                        key={skill.name}
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                      >
                        {skill.iconUrl ? (
                          <Avatar
                            src={skill.iconUrl}
                            alt={skill.name}
                            sx={{
                              width: 32,
                              height: 32,
                              bgcolor: 'white',
                              border: '1px solid',
                              borderColor: 'divider',
                            }}
                          />
                        ) : (
                          <Avatar
                            sx={{
                              width: 32,
                              height: 32,
                              bgcolor: 'rgba(143,155,255,0.2)',
                              color: 'primary.main',
                              fontSize: 14,
                            }}
                          >
                            {skill.name.charAt(0)}
                          </Avatar>
                        )}
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body1">{skill.name}</Typography>
                        </Box>
                        {levelConfig && (
                          <Chip
                            label={levelConfig.label}
                            size="small"
                            color={levelConfig.color}
                            variant={levelConfig.color === 'default' ? 'outlined' : 'filled'}
                            sx={{ borderRadius: 999 }}
                          />
                        )}
                      </Stack>
                    );
                  })}
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

