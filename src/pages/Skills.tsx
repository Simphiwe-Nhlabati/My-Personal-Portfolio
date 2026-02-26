import React from 'react';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { Container } from '../components/common/Container';
import { motion } from 'framer-motion';
import {
  Code2,
  Monitor,
  Server,
  Settings,
  Terminal,
  Database,
  Globe,
  Cpu,
  Zap,
} from 'lucide-react';
import { AnimatedIcon } from '../components/common/AnimatedIcon';
import { IconParticles } from '../components/common/IconParticles';

type IconSkill = {
  name: string;
  iconUrl?: string;
  lucideIcon?: React.ElementType;
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
  { name: 'SQL', lucideIcon: Database },
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

const tools: IconSkill[] = [
  {
    name: 'Git',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'Docker',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    name: 'Vite',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg',
  },
  {
    name: 'Prisma',
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
  },
];

// Animation variants
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    y: [-15, 15, -15],
    rotate: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pulseVariants: any = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const Skills: React.FC = () => {
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
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon Particles */}
      <IconParticles count={22} />

      {/* Animated background icons */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
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
          top: '30%',
          right: '15%',
          zIndex: 0,
          opacity: 0.08,
        }}
      >
        <Terminal size={100} color="#2dd4bf" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '20%',
          zIndex: 0,
          opacity: 0.06,
        }}
      >
        <Server size={90} color="#f472b6" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '35%',
          right: '10%',
          zIndex: 0,
          opacity: 0.08,
        }}
      >
        <Cpu size={110} color="#fbbf24" />
      </motion.div>

      {/* Pulsing glow effects */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
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
                background: 'rgba(45, 212, 191, 0.1)',
                border: '1px solid rgba(45, 212, 191, 0.2)',
                marginBottom: 16,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Zap size={14} color="#2dd4bf" />
              </motion.div>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#2dd4bf',
                  letterSpacing: '0.12em',
                }}
              >
                SKILLS
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
              The Stack I Work
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #2dd4bf 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                With Most
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                lineHeight: 1.8,
                maxWidth: 580,
                mb: 8,
              }}
            >
              A curated set of technologies I've mastered through building
              production-grade applications. Each tool chosen for its strengths.
            </Typography>
          </motion.div>

          {/* Skills Grid */}
          <Stack spacing={4}>
            {/* Languages - Full width */}
            <motion.div variants={itemVariants}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(45, 212, 191, 0.04) 100%)',
                  backdropFilter: 'blur(20px)',
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(167, 139, 250, 0.2)',
                    boxShadow: '0 0 40px rgba(167, 139, 250, 0.15)',
                  },
                }}
              >
                {/* Decorative icon */}
                <motion.div
                  animate={{
                    opacity: [0.05, 0.1, 0.05],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: '#a78bfa',
                  }}
                >
                  <Globe size={80} />
                </motion.div>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0.05) 100%)',
                      border: '1px solid rgba(167, 139, 250, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AnimatedIcon icon={Code2} size={22} color="#a78bfa" animation="spin" hover />
                  </motion.div>
                  <Typography
                    sx={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                    }}
                  >
                    Languages
                  </Typography>
                </Stack>
                <SkillGrid items={languages} accentColor="#a78bfa" />
              </Paper>
            </motion.div>

            {/* Frontend + Backend row */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.08) 0%, rgba(167, 139, 250, 0.04) 100%)',
                    backdropFilter: 'blur(20px)',
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(45, 212, 191, 0.2)',
                      boxShadow: '0 0 40px rgba(45, 212, 191, 0.15)',
                    },
                  }}
                >
                  {/* Decorative icon */}
                  <motion.div
                    animate={{
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      color: '#2dd4bf',
                    }}
                  >
                    <Monitor size={70} />
                  </motion.div>

                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <motion.div
                      whileHover={{ rotate: -180 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2) 0%, rgba(45, 212, 191, 0.05) 100%)',
                        border: '1px solid rgba(45, 212, 191, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AnimatedIcon icon={Monitor} size={22} color="#2dd4bf" animation="spin" hover />
                    </motion.div>
                    <Typography
                      sx={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#f8fafc',
                      }}
                    >
                      Frontend
                    </Typography>
                  </Stack>
                  <SkillGrid items={frontend} accentColor="#2dd4bf" />
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.08) 0%, rgba(167, 139, 250, 0.04) 100%)',
                    backdropFilter: 'blur(20px)',
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(244, 114, 182, 0.2)',
                      boxShadow: '0 0 40px rgba(244, 114, 182, 0.15)',
                    },
                  }}
                >
                  {/* Decorative icon */}
                  <motion.div
                    animate={{
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      color: '#f472b6',
                    }}
                  >
                    <Server size={70} />
                  </motion.div>

                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(244, 114, 182, 0.2) 0%, rgba(244, 114, 182, 0.05) 100%)',
                        border: '1px solid rgba(244, 114, 182, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AnimatedIcon icon={Server} size={22} color="#f472b6" animation="spin" hover />
                    </motion.div>
                    <Typography
                      sx={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#f8fafc',
                      }}
                    >
                      Backend
                    </Typography>
                  </Stack>
                  <SkillGrid items={backend} accentColor="#f472b6" />
                </Paper>
              </motion.div>
            </Stack>

            {/* Tools - Full width */}
            <motion.div variants={itemVariants}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(167, 139, 250, 0.04) 100%)',
                  backdropFilter: 'blur(20px)',
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(251, 191, 36, 0.2)',
                    boxShadow: '0 0 40px rgba(251, 191, 36, 0.15)',
                  },
                }}
              >
                {/* Decorative icon */}
                <motion.div
                  animate={{
                    opacity: [0.05, 0.1, 0.05],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: '#fbbf24',
                  }}
                >
                  <Settings size={80} />
                </motion.div>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <motion.div
                    whileHover={{ rotate: -180 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.05) 100%)',
                      border: '1px solid rgba(251, 191, 36, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AnimatedIcon icon={Settings} size={22} color="#fbbf24" animation="spin" hover />
                  </motion.div>
                  <Typography
                    sx={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                    }}
                  >
                    Tools & Others
                  </Typography>
                </Stack>
                <SkillGrid items={tools} accentColor="#fbbf24" />
              </Paper>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

const SkillGrid: React.FC<{ items: IconSkill[]; accentColor: string }> = ({ items, accentColor }) => (
  <Stack
    direction="row"
    spacing={2}
    flexWrap="wrap"
    useFlexGap
    sx={{ rowGap: 2 }}
  >
    {items.map((skill, index) =>
      skill.iconUrl ? (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            whileHover={{
              background: `${accentColor}20`,
              borderRadius: '16px',
            }}
            style={{
              padding: 8,
              transition: 'all 0.3s ease',
            }}
          >
            <img
              src={skill.iconUrl}
              alt={skill.name}
              title={skill.name}
              style={{
                width: 52,
                height: 52,
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              }}
            />
          </motion.div>
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            style={{
              position: 'absolute',
              bottom: '100%',
              marginBottom: 8,
              padding: '6px 12px',
              borderRadius: '8px',
              background: `${accentColor}e6`,
              color: '#0a0a0f',
              fontSize: '0.75rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            {skill.name}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
          whileHover={{
            y: -4,
            scale: 1.05,
            background: `${accentColor}20`,
            borderColor: accentColor,
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 20px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${accentColor}40`,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          {skill.lucideIcon && React.createElement(skill.lucideIcon, { size: 18, color: accentColor })}
          <Typography
            sx={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#f8fafc',
            }}
          >
            {skill.name}
          </Typography>
        </motion.div>
      ),
    )}
  </Stack>
);
