import React from 'react';
import { Box, Card, CardContent, Stack, Typography, Paper } from '@mui/material';
import { Container } from '../components/common/Container';
import { motion } from 'framer-motion';
import {
  Cpu,
  Layers,
  ShieldCheck,
  GitBranch,
  Sparkles,
  Code2,
  Terminal,
  Zap,
  Rocket,
  Target,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { AnimatedIcon } from '../components/common/AnimatedIcon';
import { IconParticles } from '../components/common/IconParticles';

const aboutCards = [
  {
    icon: Cpu,
    title: 'Technical Profile',
    description:
      'Full-stack software engineer specialised in building scalable, high-performance web applications with a strong foundation in Python/Django and deepening expertise in JavaScript/TypeScript, React, Nest.js and Express.js, while leveraging AI-assisted development workflows to improve productivity and code quality.',
    gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.12) 0%, rgba(45, 212, 191, 0.06) 100%)',
    iconColor: '#a78bfa',
    glow: '0 0 40px rgba(167, 139, 250, 0.3)',
    features: ['Python/Django', 'TypeScript/React', 'AI Workflows'],
  },
  {
    icon: Layers,
    title: 'Early Foundation',
    description:
      'I began my professional journey in a high-intensity Software Engineering environment, where I developed a rigorous foundation in Python and backend-development. While becoming proficient with the backend complexities of Django, DjangoREST and Docker, I discovered my true passion: building systems that are not just functional, but architecturally resilient and scalable.',
    gradient: 'linear-gradient(135deg, rgba(45, 212, 191, 0.12) 0%, rgba(167, 139, 250, 0.06) 100%)',
    iconColor: '#2dd4bf',
    glow: '0 0 40px rgba(45, 212, 191, 0.3)',
    features: ['Backend Systems', 'Docker', 'Scalability'],
  },
  {
    icon: ShieldCheck,
    title: 'What I Enjoy Building',
    description:
      'I enjoy working on systems that involve real-world complexity such as authentication, permissions, workflows, and data integrity and I approach development with an emphasis on clean architecture, maintainable code, and clear reasoning.',
    gradient: 'linear-gradient(135deg, rgba(244, 114, 182, 0.12) 0%, rgba(167, 139, 250, 0.06) 100%)',
    iconColor: '#f472b6',
    glow: '0 0 40px rgba(244, 114, 182, 0.3)',
    features: ['Auth Systems', 'RBAC', 'Data Integrity'],
  },
  {
    icon: GitBranch,
    title: 'TypeScript Pivot',
    description:
      'Driven by the fast-paced nature of web technologies, I pivoted into the TypeScript ecosystem, learning about NestJS, Express.js, React, and Bun.js. I don\'t just write code; I engineer environments. Whether it\'s designing complex Role-Based Access Control (RBAC) systems or automating quality assurance with modern testing tools like Playwright, I prioritize type-safety, performance, and maintainable design patterns.',
    gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.12) 0%, rgba(244, 114, 182, 0.06) 100%)',
    iconColor: '#c4b5fd',
    glow: '0 0 40px rgba(167, 139, 250, 0.3)',
    features: ['NestJS', 'Type-Safety', 'Testing'],
  },
  {
    icon: Sparkles,
    title: 'Continuous Evolution',
    description:
      'I\'m intentional about continuous learning and actively refine my workflow using modern tooling and AI-assisted development to improve productivity, debugging, and code quality. My goal is to grow into a well-rounded engineer who delivers reliable software and contributes meaningfully to a collaborative team.',
    gradient: 'linear-gradient(135deg, rgba(45, 212, 191, 0.12) 0%, rgba(244, 114, 182, 0.06) 100%)',
    iconColor: '#4ade80',
    glow: '0 0 40px rgba(74, 222, 128, 0.3)',
    features: ['Continuous Learning', 'AI Tools', 'Team Player'],
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
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pulseVariants: any = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const About: React.FC = () => {
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
          top: '20%',
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon Particles */}
      <IconParticles count={20} />

      {/* Animated background icons */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          zIndex: 0,
          opacity: 0.06,
        }}
      >
        <Code2 size={140} color="#a78bfa" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '20%',
          zIndex: 0,
          opacity: 0.06,
        }}
      >
        <Terminal size={100} color="#2dd4bf" />
      </motion.div>

      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
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
                background: 'rgba(167, 139, 250, 0.1)',
                border: '1px solid rgba(167, 139, 250, 0.2)',
                marginBottom: 16,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Zap size={14} color="#a78bfa" />
              </motion.div>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#a78bfa',
                  letterSpacing: '0.12em',
                }}
              >
                ABOUT
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
              Full-Stack Engineer
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Building Scalable Systems
              </Box>
            </Typography>
          </motion.div>

          {/* Skill Pills with animated icons */}
          <motion.div variants={itemVariants}>
            <Stack
              direction="row"
              spacing={2}
              flexWrap="nowrap"
              useFlexGap
              sx={{ mb: 8, flexWrap: 'wrap' }}
            >
              <AnimatedSkillPill
                icon={Cpu}
                label="Python / Django"
                color="#a78bfa"
              />
              <AnimatedSkillPill
                icon={Code2}
                label="TypeScript / React"
                color="#2dd4bf"
              />
              <AnimatedSkillPill
                icon={Sparkles}
                label="AI-Augmented Dev"
                color="#f472b6"
              />
            </Stack>
          </motion.div>

          {/* Cards Grid */}
          <Stack spacing={4}>
            {aboutCards.map((card) => (
              <motion.div key={card.title} variants={itemVariants}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: card.gradient,
                    backdropFilter: 'blur(20px)',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: `${card.iconColor}60`,
                      boxShadow: card.glow,
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  {/* Animated background icon */}
                  <motion.div
                    animate={{
                      opacity: [0.03, 0.08, 0.03],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      bottom: -30,
                      right: -30,
                      color: card.iconColor,
                    }}
                  >
                    <card.icon size={150} />
                  </motion.div>

                  <CardContent sx={{ display: 'flex', gap: 3, p: 4, position: 'relative', zIndex: 1 }}>
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        background: `${card.iconColor}15`,
                        border: `1px solid ${card.iconColor}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <AnimatedIcon
                        icon={card.icon}
                        size={30}
                        color={card.iconColor}
                        animation="float"
                        hover
                      />
                    </motion.div>

                    {/* Content */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: '#f8fafc',
                          mb: 1.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color: '#94a3b8',
                          lineHeight: 1.8,
                          mb: 2,
                        }}
                      >
                        {card.description}
                      </Typography>

                      {/* Feature badges */}
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {card.features.map((feature) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              background: `${card.iconColor}25`,
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              padding: '6px 12px',
                              borderRadius: '999px',
                              background: `${card.iconColor}10`,
                              border: `1px solid ${card.iconColor}30`,
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: card.iconColor,
                              cursor: 'pointer',
                              transition: 'all 0.25s ease',
                            }}
                          >
                            <CheckCircle2 size={12} />
                            {feature}
                          </motion.div>
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Stack>

          {/* Bottom CTA Section */}
          <motion.div variants={itemVariants}>
            <Paper
              elevation={0}
              sx={{
                mt: 8,
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(45, 212, 191, 0.05) 100%)',
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative animated icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  opacity: 0.1,
                }}
              >
                <Award size={80} color="#a78bfa" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  opacity: 0.1,
                }}
              >
                <Target size={80} color="#2dd4bf" />
              </motion.div>

              <Typography
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 700,
                  color: '#f8fafc',
                  mb: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Ready to Build Something{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Amazing
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#94a3b8',
                  maxWidth: 500,
                  mx: 'auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                I'm currently open to junior developer and learning-focused roles.
                Let's discuss how I can contribute to your team.
              </Typography>

              {/* Animated CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: 24 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 30px rgba(167, 139, 250, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '12px 32px',
                    borderRadius: '999px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Rocket size={18} />
                  View Open Positions
                </motion.button>
              </motion.div>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

const AnimatedSkillPill: React.FC<{
  icon: React.ElementType;
  label: string;
  color: string;
}> = ({ icon: Icon, label, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{
      scale: 1.05,
      y: -4,
      boxShadow: `0 8px 20px ${color}40`,
    }}
    whileTap={{ scale: 0.98 }}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 20px',
      borderRadius: '999px',
      background: `${color}10`,
      border: `1px solid ${color}40`,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }}
  >
    <motion.div
      animate={{
        boxShadow: [`0 0 0 0 ${color}40`, `0 0 0 8px ${color}00`],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: color,
      }}
    />
    <AnimatedIcon icon={Icon} size={16} color={color} animation="pulse" hover />
    <Typography
      sx={{
        fontSize: '0.85rem',
        fontWeight: 600,
        color: '#f8fafc',
      }}
    >
      {label}
    </Typography>
  </motion.div>
);
