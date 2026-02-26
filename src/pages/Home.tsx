import React from 'react';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  Braces,
  Cpu,
  Globe,
  Database,
  Server,
  Sparkles,
  Zap,
  Rocket,
} from 'lucide-react';
import { IconParticles } from '../components/common/IconParticles';
import { AnimatedIcon } from '../components/common/AnimatedIcon';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as any,
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear' as any,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as any,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(at 80% 0%, rgba(167, 139, 250, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(45, 212, 191, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(244, 114, 182, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(167, 139, 250, 0.12) 0px, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Icon Particles Background */}
      <IconParticles count={25} />

      {/* Animated floating icons background */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <Code2 size={80} color="#a78bfa" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '25%',
          right: '15%',
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <Terminal size={60} color="#2dd4bf" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          zIndex: 0,
          opacity: 0.12,
        }}
      >
        <Database size={70} color="#f472b6" />
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <Server size={65} color="#a78bfa" />
      </motion.div>

      {/* Rotating decorative elements */}
      <motion.div
        variants={rotateVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '10%',
          right: '25%',
          zIndex: 0,
          opacity: 0.08,
        }}
      >
        <Braces size={120} color="#2dd4bf" />
      </motion.div>

      {/* Pulsing glow effects */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 6, md: 10 }}
            alignItems="center"
          >
            {/* Left: Hero content */}
            <Box sx={{ flex: 1.1, position: 'relative' }}>
              {/* Eyebrow badge with animated icon */}
              <motion.div
                variants={itemVariants}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 20px',
                  borderRadius: '999px',
                  background: 'rgba(167, 139, 250, 0.1)',
                  border: '1px solid rgba(167, 139, 250, 0.2)',
                  marginBottom: 24,
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: ['0 0 0 0 rgba(74, 222, 128, 0.4)', '0 0 0 10px rgba(74, 222, 128, 0)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#4ade80',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#a78bfa',
                    letterSpacing: '0.08em',
                  }}
                >
                  AVAILABLE FOR HIRE
                </Typography>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={14} color="#a78bfa" />
                </motion.div>
              </motion.div>

              {/* Main heading */}
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: '-0.04em',
                    mb: 3,
                  }}
                >
                  Building{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Digital
                  </Box>
                  <br />
                  Experiences
                </Typography>
              </motion.div>

              {/* Subtitle with animated underline */}
              <motion.div variants={itemVariants} style={{ position: 'relative' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    color: '#94a3b8',
                    lineHeight: 1.8,
                    maxWidth: 580,
                    mb: 4,
                  }}
                >
                  Full-stack software engineer crafting scalable, type-safe applications
                  with the TypeScript and Python ecosystems. I integrate AI workflows
                  to accelerate delivery without compromising code integrity.
                </Typography>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '60px' }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{
                    height: 3,
                    background: 'linear-gradient(90deg, #a78bfa, #2dd4bf)',
                    borderRadius: 2,
                    marginTop: 16,
                  }}
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mb: 5 }}
                >
                  <Button
                    onClick={() => navigate('/projects')}
                    endIcon={<ArrowRight size={18} />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                      boxShadow: '0 4px 20px rgba(167, 139, 250, 0.4)',
                      '&:hover': {
                        boxShadow: '0 8px 40px rgba(167, 139, 250, 0.6)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/contact')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      borderColor: 'rgba(167, 139, 250, 0.4)',
                      color: '#a78bfa',
                      background: 'transparent',
                      '&:hover': {
                        borderColor: '#a78bfa',
                        background: 'rgba(167, 139, 250, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </Stack>
              </motion.div>

              {/* Social links with animated icons */}
              <motion.div
                variants={itemVariants}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.85rem',
                    color: '#64748b',
                    mr: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <AnimatedIcon icon={Zap} size={14} color="#a78bfa" animation="pulse" />
                  Connect:
                </Typography>
                <SocialIconButton href="https://github.com/simphiwe-nhlabati" aria-label="GitHub">
                  <AnimatedIcon icon={Github} size={20} animation="wiggle" hover />
                </SocialIconButton>
                <SocialIconButton href="https://www.linkedin.com/in/simphiwe-nhlabati-691106327/" aria-label="LinkedIn">
                  <AnimatedIcon icon={Linkedin} size={20} animation="heartbeat" hover />
                </SocialIconButton>
                <SocialIconButton href="mailto:thomasnhlabati770@gmail.com" aria-label="Email">
                  <AnimatedIcon icon={Mail} size={20} animation="glow" hover />
                </SocialIconButton>
              </motion.div>

              {/* Tech stack preview with floating icons */}
              <motion.div
                variants={itemVariants}
                style={{
                  marginTop: 40,
                  display: 'flex',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
              >
                <TechIcon icon={Globe} color="#a78bfa" label="Frontend" delay={0.5} />
                <TechIcon icon={Server} color="#2dd4bf" label="Backend" delay={0.6} />
                <TechIcon icon={Database} color="#f472b6" label="Database" delay={0.7} />
                <TechIcon icon={Cpu} color="#fbbf24" label="AI/ML" delay={0.8} />
              </motion.div>
            </Box>

            {/* Right: Code window */}
            <motion.div
              variants={itemVariants}
              style={{
                flex: 1,
                width: '100%',
                maxWidth: 560,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    padding: '1px',
                    background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.3), rgba(45, 212, 191, 0.2), rgba(244, 114, 182, 0.2))',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    pointerEvents: 'none',
                  },
                }}
              >
                {/* Window title bar with animated buttons */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2.5,
                    py: 1.75,
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {['#FF5F57', '#FFBD2E', '#28C840'].map((color, index) => (
                    <motion.div
                      key={color}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}40`,
                        cursor: 'pointer',
                      }}
                      transition={{ delay: index * 0.1 }}
                    />
                  ))}
                  <Typography
                    sx={{
                      ml: 2,
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.4)',
                      fontFamily: "'JetBrains Mono', monospace",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Terminal size={12} />
                    portfolio.ts
                  </Typography>
                </Box>

                {/* Code body */}
                <Box
                  sx={{
                    p: 3.5,
                    minHeight: 320,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    lineHeight: 2,
                    color: '#e2e8f0',
                  }}
                >
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: 'inherit' }}>
                    <CodeLine text='interface Engineer {' color="#a78bfa" />
                    <CodeLine text='  name: string;' color="#e2e8f0" />
                    <CodeLine text='  location: string;' color="#e2e8f0" />
                    <CodeLine text='  stack: string[];' color="#e2e8f0" />
                    <CodeLine text='  aiEnhanced: boolean;' color="#e2e8f0" />
                    <CodeLine text='}' color="#a78bfa" />
                    <CodeLine text='' />
                    <CodeLine text='const simphiwe: Engineer = {' color="#e2e8f0" />
                    <CodeLine text='  name: "Simphiwe Nhlabati",' color="#2dd4bf" />
                    <CodeLine text='  location: "South Africa",' color="#2dd4bf" />
                    <CodeLine text='  stack: [' color="#e2e8f0" />
                    <CodeLine text='    "Python", "Django", "TypeScript",' color="#f472b6" />
                    <CodeLine text='    "React", "NestJS", "PostgreSQL"' color="#f472b6" />
                    <CodeLine text='  ],' color="#e2e8f0" />
                    <CodeLine text='  aiEnhanced: true,' color="#2dd4bf" />
                    <CodeLine text='};' color="#e2e8f0" />
                    <CodeLine text='' />
                    <CodeLine text='// Ready to build' color="#64748b" />
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      style={{ color: '#a78bfa' }}
                    >
                      ▌
                    </motion.span>
                  </pre>
                </Box>

                {/* Animated Rocket icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Rocket size={32} color="#a78bfa" />
                  </motion.div>
                </motion.div>
              </Paper>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

// Helper component for code lines
const CodeLine: React.FC<{ text: string; color?: string }> = ({ text, color = '#e2e8f0' }) => (
  <div style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>
    {text}
  </div>
);

// Social Icon Button
const SocialIconButton: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({
  href,
  children,
  ...props
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      y: -3,
      boxShadow: '0 8px 20px rgba(167, 139, 250, 0.3)',
    }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: '12px',
      background: 'rgba(167, 139, 250, 0.1)',
      border: '1px solid rgba(167, 139, 250, 0.2)',
      color: '#a78bfa',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}
    {...props}
  >
    {children}
  </motion.a>
);

// Tech Icon Component
const TechIcon: React.FC<{
  icon: React.ElementType;
  color: string;
  label: string;
  delay: number;
}> = ({ icon: Icon, color, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{
      y: -5,
      scale: 1.05,
      boxShadow: `0 10px 30px ${color}40`,
    }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      borderRadius: 12,
      background: `${color}10`,
      border: `1px solid ${color}30`,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }}
  >
    <AnimatedIcon icon={Icon} size={24} color={color} animation="float" hover />
    <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#94a3b8' }}>
      {label}
    </span>
  </motion.div>
);
