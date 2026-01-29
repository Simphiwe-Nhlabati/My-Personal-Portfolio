import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/ui/ProjectCard';

type Project = {
  title: string;
  problem: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: 'Full-stack university website',
    problem:
      'A university needed a modern platform for courses, departments, and student information that could grow with new requirements over time.',
    tech: ['Django', 'Django REST', 'PostgreSQL', 'React'],
  },
  {
    title: 'News application',
    problem:
      'Building a robust news application that can aggregate, filter, and surface stories in a way that stays fast and reliable under changing content.',
    tech: ['Django', 'APIs', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    title: 'E-commerce platform',
    problem:
      'Creating a full-stack e-commerce experience with product browsing, carts, and checkout flows while keeping the codebase maintainable.',
    tech: ['Django', 'Django REST', 'Stripe (concept)', 'Responsive UI'],
  },
];

export const Projects: React.FC = () => {
  const navigate = useNavigate();

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
                onViewProject={() => navigate('/projects/university')}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

