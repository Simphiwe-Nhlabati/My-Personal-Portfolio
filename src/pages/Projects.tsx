import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Container } from '../components/common/Container';
import { motion } from 'framer-motion';
import {
  Github,
  FolderGit2,
  Code2,
  Database,
  Server,
  ArrowUpRight,
  GitBranch,
  Layers,
} from 'lucide-react';
import { AnimatedIcon } from '../components/common/AnimatedIcon';
import { IconParticles } from '../components/common/IconParticles';

type Project = {
  title: string;
  problem: string;
  tech: string[];
  githubUrl: string;
  gradient: string;
  icon: React.ElementType;
  accentColor: string;
};

const projects: Project[] = [
  {
    title: 'Freelance Invoice & Payment Tracker',
    problem:
      'Engineered a VAT-compliant financial system with automatic 15% VAT computation and ZAR currency handling using cents storage to eliminate rounding errors, secured with JWT authentication, refresh token rotation, and hardened HTTP security headers.',
    tech: ['TypeScript', 'React', 'Express.js', 'Bun.js', 'Prisma ORM', 'PostgreSQL'],
    githubUrl: 'https://github.com/Simphiwe-Nhlabati/payflow_invoice-payment-tracker',
    gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(45, 212, 191, 0.08) 100%)',
    icon: FolderGit2,
    accentColor: '#a78bfa',
  },
  {
    title: 'High-Precision Expense Settlement',
    problem:
      'Designed a double-entry ledger for shared expense tracking using Drizzle ORM and PostgreSQL, combining Argon2id password hashing, JWT refresh rotation, POPIA-aligned audit logging, and idempotent, rate-limited APIs for reliability.',
    tech: ['React', 'Bun.js', 'Hono.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Vitest'],
    githubUrl: 'https://github.com/Simphiwe-Nhlabati/Expense-Sharing_Settlement',
    gradient: 'linear-gradient(135deg, rgba(45, 212, 191, 0.15) 0%, rgba(167, 139, 250, 0.08) 100%)',
    icon: Database,
    accentColor: '#2dd4bf',
  },
  {
    title: 'University Web Application',
    problem:
      'Structured a modular NestJS backend with service-oriented logic and role-based access control, backed by TypeORM and MySQL for relational data (students, teachers, courses), and a high-performance React/Vite UI with custom hooks and Playwright-tested flows.',
    tech: ['React', 'Vite', 'NestJS', 'Node.js/Bun.js', 'TypeORM', 'MySQL', 'Playwright'],
    githubUrl: 'https://github.com/Simphiwe-Nhlabati/University-Website-Nest.js',
    gradient: 'linear-gradient(135deg, rgba(244, 114, 182, 0.15) 0%, rgba(167, 139, 250, 0.08) 100%)',
    icon: Server,
    accentColor: '#f472b6',
  },
];

// Animation variants
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const floatVariants: any = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const Projects: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '400px',
          background: 'radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon Particles */}
      <IconParticles count={18} />

      {/* Animated background icons */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          zIndex: 0,
          opacity: 0.08,
        }}
      >
        <Code2 size={120} color="#a78bfa" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '5%',
          zIndex: 0,
          opacity: 0.08,
        }}
      >
        <Layers size={100} color="#2dd4bf" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '30%',
          left: '15%',
          zIndex: 0,
          opacity: 0.06,
        }}
      >
        <GitBranch size={80} color="#f472b6" />
      </motion.div>

      <Container sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <Box sx={{ mb: 2 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 20px',
                borderRadius: '999px',
                background: 'rgba(167, 139, 250, 0.1)',
                border: '1px solid rgba(167, 139, 250, 0.2)',
                marginBottom: 16,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <FolderGit2 size={14} color="#a78bfa" />
              </motion.div>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#a78bfa',
                  letterSpacing: '0.12em',
                }}
              >
                PROJECTS
              </Typography>
            </motion.div>
          </Box>

          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                mb: 2,
              }}
            >
              Selected{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Full-Stack
              </Box>{' '}
              Projects
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                lineHeight: 1.8,
                maxWidth: 640,
                mb: 8,
              }}
            >
              A focused set of projects demonstrating end-to-end problem solving,
              from data models to user experience. Each built with production-grade
              architecture and attention to detail.
            </Typography>
          </motion.div>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.title}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          height: '100%',
          borderRadius: 4,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: project.gradient,
          backdropFilter: 'blur(20px)',
          overflow: 'hidden',
          position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}80)`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 1,
          },
          '&:hover': {
            borderColor: `${project.accentColor}60`,
            boxShadow: `0 20px 60px -12px ${project.accentColor}40`,
          },
        }}
      >
        {/* Animated background icon */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: -20,
            right: -20,
            color: project.accentColor,
          }}
        >
          <Icon size={120} />
        </motion.div>

        <Box sx={{ p: 3.5, display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 1 }}>
          {/* Project number with icon */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                background: `${project.accentColor}20`,
                border: `1px solid ${project.accentColor}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AnimatedIcon icon={Icon} size={20} color={project.accentColor} animation="pulse" hover />
            </motion.div>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: `${project.accentColor}`,
                letterSpacing: '0.08em',
              }}
            >
              PROJECT 0{index + 1}
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#f8fafc',
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: '#94a3b8',
              lineHeight: 1.8,
              mb: 3,
              flexGrow: 1,
            }}
          >
            {project.problem}
          </Typography>

          {/* Tech stack with animated icons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
            {project.tech.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.5 }}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  background: `${project.accentColor}20`,
                  borderColor: `${project.accentColor}60`,
                }}
                style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#c4b5fd',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </Box>

          {/* View on GitHub link with animated icon */}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: project.accentColor,
              textDecoration: 'none',
            }}
          >
            <AnimatedIcon icon={Github} size={18} animation="spin" />
            View on GitHub
            <AnimatedIcon icon={ArrowUpRight} size={14} animation="bounce" />
          </motion.a>
        </Box>
      </Paper>
    </motion.div>
  );
};
