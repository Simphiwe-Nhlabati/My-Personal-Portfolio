import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/ui/ProjectCard';

type Project = {
  title: string;
  problem: string;
  tech: string[];
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: 'Freelance invoice & payment tracker',
    problem:
      'Engineered a VAT-compliant financial system with automatic 15% VAT computation and ZAR currency handling using cents storage to eliminate rounding errors, secured with JWT authentication, refresh token rotation, and hardened HTTP security headers.',
    tech: ['TypeScript', 'React', 'Express.js', 'Bun.js', 'Prisma ORM', 'PostgreSQL'],
    githubUrl: 'https://github.com/Simphiwe-Nhlabati/payflow_invoice-payment-tracker', 
  },
  {
    title: 'High-precision expense settlement',
    problem:
      'Designed a double-entry ledger for shared expense tracking using Drizzle ORM and PostgreSQL, combining Argon2id password hashing, JWT refresh rotation, POPIA-aligned audit logging, and idempotent, rate-limited APIs for reliability.',
    tech: ['React', 'Bun.js', 'Hono.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Vitest'],
    githubUrl: 'https://github.com/Simphiwe-Nhlabati/Expense-Sharing_Settlement',
  },
  {
    title: 'University web application',
    problem:
      'Structured a modular NestJS backend with service-oriented logic and role-based access control, backed by TypeORM and MySQL for relational data (students, teachers, courses), and a high-performance React/Vite UI with custom hooks and Playwright-tested flows.',
    tech: ['React', 'Vite', 'NestJS', 'Node.js/Bun.js', 'TypeORM', 'MySQL', 'Playwright'],
    githubUrl: 'https://github.com/Simphiwe-Nhlabati/University-Website-Nest.js',
  },
];

export const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="PROJECTS"
          title="Selected full-stack projects"
          description="A focused set of projects that show how I approach real-world problems end to end, from data models to user experience."
        />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 640 }}
        >
          Each project starts from a concrete problem and moves toward a calm, maintainable
          solution. Cards below highlight what needed to be solved and the tools used to deliver.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
              <ProjectCard
                title={project.title}
                summary={project.problem}
                tech={project.tech}
                onViewProject={() => window.open(project.githubUrl, '_blank', 'noreferrer')}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

