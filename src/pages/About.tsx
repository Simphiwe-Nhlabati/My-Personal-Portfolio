import React from 'react';
import { Box, Card, CardContent, Stack, Typography, Chip } from '@mui/material';
import { Container } from '../components/common/Container';
import { Cpu, Layers, ShieldCheck, GitBranch, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        <Stack spacing={4}>
          {/* Header */}
          <Stack spacing={1.5}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: '0.14em', color: 'text.secondary' }}
            >
              ABOUT
            </Typography>
            <Typography variant="h1">
              Full-stack engineer focused on scalable, real-world systems.
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="nowrap" useFlexGap>
              <Chip label="Python / Django" size="small" sx={{ borderRadius: 900,boxShadow: '0 0 10px 0 rgba(105, 8, 84, 0.8)', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)', }, }} />
              <Chip label="TypeScript / React" size="small" sx={{ borderRadius: 900, boxShadow: '0 0 10px 0 rgba(8, 65, 133, 0.8)', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)', }, }} />
              <Chip label="AI-augmented dev" size="small" sx={{ borderRadius: 900, boxShadow: '0 0 10px 0 rgba(133, 42, 145, 0.81)', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 0 15px 0 rgba(235, 41, 225, 0.79)', }, }} />
            </Stack>
          </Stack>

          {/* Cards based on info_about_me.txt */}
          <Stack spacing={3}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                borderColor: 'divider',
                bgcolor: 'rgba(253, 253, 253, 0.9)',
                boxShadow: '0 0 10px 0 rgba(133, 42, 145, 0.81)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px 0 rgba(235, 41, 225, 0.79)',
                },
                display: 'flex',
              }}
            >
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '999px',
                    bgcolor: 'rgba(143,155,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Cpu size={22} />
                </Box>
                <Box>
                  <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 0.75 }}>
                    Technical profile
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Full-stack software engineer specialised in building scalable, high-performance
                    web applications with a strong foundation in Python/Django and deepening my
                    expertise in JavaScript/TypeScript, React, Nest.js and Express.js, while
                    leveraging AI-assisted development workflows to improve productivity and code
                    quality. A driven, adaptable developer committed to continuous improvement and
                    real-world impact.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                borderColor: 'divider',
                display: 'flex',
                boxShadow: '0 0 10px 0 rgba(2, 9, 53, 0.8)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px 0 rgba(235, 41, 225, 0.79)',
                },
              }}
            >
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '999px',
                    bgcolor: 'rgba(201,160,220,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Layers size={22} />
                </Box>
                <Box>
                  <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 0.75 }}>
                    Early foundation
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    I began my professional journey in a high-intensity Software Engineering
                    environment, where I developed a rigorous foundation in Python and
                    backend-development. While becoming proficient with the backend complexities of
                    Django, DjangoREST and Docker, I discovered my true passion: building systems
                    that are not just functional, but architecturally resilient and scalable.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                borderColor: 'divider',
                display: 'flex',
                boxShadow: '0 0 10px 0 rgba(18, 241, 230, 0.8)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px 0 rgba(235, 41, 225, 0.79)',
                },
              }}
            >
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '999px',
                    bgcolor: 'rgba(143,155,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={22} />
                </Box>
                <Box>
                  <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 0.75 }}>
                    What I enjoy building
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    I enjoy working on systems that involve real-world complexity such as
                    authentication, permissions, workflows, and data integrity and I approach
                    development with an emphasis on clean architecture, maintainable code, and clear
                    reasoning.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                borderColor: 'divider',
                display: 'flex',
                boxShadow: '0 0 10px 0 rgba(18, 241, 156, 0.8)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '999px',
                    bgcolor: 'rgba(201,160,220,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <GitBranch size={22} />
                </Box>
                <Box>
                  <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 0.75 }}>
                    TypeScript pivot
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Driven by the fast-paced nature of web technologies, I pivoted into the
                    TypeScript ecosystem, learning about NestJS, Express.js, React, and Bun.js. I
                    don&apos;t just write code; I engineer environments. Whether it’s designing
                    complex Role-Based Access Control (RBAC) systems or automating quality assurance
                    with modern testing tools like Playwright, I prioritize type-safety,
                    performance, and maintainable design patterns.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                borderColor: 'divider',
                display: 'flex',
                boxShadow: '0 0 10px 0 rgba(25, 182, 4, 0.8)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px 0 rgba(235, 41, 225, 0.79)',
                },
              }}
            >
              <CardContent sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '999px',
                    bgcolor: 'rgba(143,155,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={22} />
                </Box>
                <Box>
                  <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 0.75 }}>
                    Continuous evolution
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    I&apos;m intentional about continuous learning and actively refine my workflow
                    using modern tooling and AI-assisted development to improve productivity,
                    debugging, and code quality. My goal is to grow into a well-rounded engineer who
                    delivers reliable software and contributes meaningfully to a collaborative team.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

