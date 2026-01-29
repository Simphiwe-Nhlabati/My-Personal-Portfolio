import React from 'react';
import {
  Box,
  Chip,
  Divider,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import { Container } from '../components/common/Container';

const techStack = ['React', 'TypeScript', 'Material UI', 'React Router', 'Vite'];

export const ProjectDetail: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        {/* Header */}
        <Stack spacing={1.5} mb={4}>
          <Typography variant="overline" sx={{ letterSpacing: '0.14em', color: 'text.secondary' }}>
            PROJECT DETAIL
          </Typography>
          <Typography variant="h1">
            Recruiter-Focused Developer Portfolio
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            A calm, multi-page portfolio built to help hiring managers understand my technical
            skills, decision-making, and delivery style in just a few minutes.
          </Typography>
        </Stack>

        {/* Tech stack */}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={5}>
          {techStack.map((item) => (
            <Chip
              key={item}
              label={item}
              size="small"
              sx={{
                bgcolor: 'rgba(143,155,255,0.08)',
                borderRadius: 999,
              }}
            />
          ))}
        </Stack>

        {/* Content sections */}
        <Stack spacing={4}>
          <Section
            title="Overview"
            body="This project is a personal portfolio optimized for recruiters and hiring managers. Instead of focusing on visual effects, it prioritizes clarity, scannability, and a structure that mirrors how technical managers quickly evaluate candidates: projects, responsibilities, and impact."
          />

          <Section
            title="Problem and solution"
            body="Traditional portfolios often bury important information under long narratives or heavy visuals. Hiring managers rarely have time to read everything, so critical signals about ownership, complexity, and decision-making can be missed. This portfolio addresses that by giving projects a dedicated space, standardizing how information is presented, and keeping the design calm and distraction-free."
          />

          <Section
            title="Key technical decisions"
            list={[
              'Used React with TypeScript to keep components predictable and easier to evolve as the portfolio grows.',
              'Introduced a clear folder structure (pages, components, data, theme, routes) so the codebase looks familiar to engineers joining an existing project.',
              'Centralized colors and typography with a Material UI theme to ensure visual consistency and make future design tweaks low-risk.',
              'Separated project data from presentation so adding or updating projects does not require layout changes.',
            ]}
          />

          <Section
            title="Challenges and learnings"
            list={[
              'Balancing visual personality with readability: I iterated on color usage and spacing until content remained the primary focus.',
              'Keeping components small and reusable: the layout, section headers, and cards were refined so they can be reused across multiple pages without duplication.',
              'Thinking from a recruiter’s perspective: I adjusted copy, ordering, and emphasis based on how quickly someone unfamiliar with my work could understand my strengths.',
            ]}
          />

          <Stack spacing={1}>
            <Typography variant="h3" sx={{ fontSize: '1.25rem' }}>
              Links
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The links below point to where the code lives and, when deployed, a live version of the portfolio.
            </Typography>
            <Stack direction="row" spacing={3} mt={1}>
              <MuiLink
                href="https://github.com/your-username/your-portfolio-repo"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                GitHub repository
              </MuiLink>
              <MuiLink
                href="https://your-live-demo-url.com"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Live demo
              </MuiLink>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

type SectionProps = {
  title: string;
  body?: string;
  list?: string[];
};

const Section: React.FC<SectionProps> = ({ title, body, list }) => {
  return (
    <Stack spacing={1.5}>
      <Divider />
      <Typography variant="h3" sx={{ fontSize: '1.25rem' }}>
        {title}
      </Typography>
      {body && (
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>
      )}
      {list && (
        <Stack component="ul" spacing={0.75} sx={{ pl: 2, m: 0 }}>
          {list.map((item) => (
            <Typography key={item} component="li" variant="body2" color="text.secondary">
              {item}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

