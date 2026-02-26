import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Mail, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react';
import { AnimatedIcon } from '../components/common/AnimatedIcon';
import { IconParticles } from '../components/common/IconParticles';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const email = 'thomasnhlabati770@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/simphiwe-nhlabati-691106327/';
  const github = 'https://github.com/simphiwe-nhlabati';

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: email,
      href: `mailto:${email}`,
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(167, 139, 250, 0.05) 100%)',
      animation: 'pulse' as const,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: linkedIn,
      color: '#2dd4bf',
      gradient: 'linear-gradient(135deg, rgba(45, 212, 191, 0.15) 0%, rgba(45, 212, 191, 0.05) 100%)',
      animation: 'heartbeat' as const,
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my code',
      href: github,
      color: '#f472b6',
      gradient: 'linear-gradient(135deg, rgba(244, 114, 182, 0.15) 0%, rgba(244, 114, 182, 0.05) 100%)',
      animation: 'wiggle' as const,
    },
  ];

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
          top: '30%',
          left: '20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      {/* Icon Particles */}
      <IconParticles count={15} />

      <Container sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 } }}>
        {/* Header */}
        <Box className="fade-in" sx={{ mb: 2 }}>
          <Box
            sx={{
              display: 'inline-flex',
              px: 2.5,
              py: 1,
              borderRadius: 999,
              background: 'rgba(167, 139, 250, 0.1)',
              border: '1px solid rgba(167, 139, 250, 0.2)',
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#a78bfa',
                letterSpacing: '0.12em',
              }}
            >
              CONTACT
            </Typography>
          </Box>
        </Box>

        <Typography
          className="fade-in-delay-1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            mb: 2,
          }}
        >
          Let's Build Something
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
            Together
          </Box>
        </Typography>

        <Typography
          className="fade-in-delay-2"
          sx={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            lineHeight: 1.8,
            maxWidth: 600,
            mb: 8,
          }}
        >
          Email and LinkedIn are the fastest ways to reach me. I'm happy to share more
          details about projects, walk through code, or discuss how I can support your team.
        </Typography>

        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
          {/* Contact Methods */}
          <Box sx={{ flex: 1, maxWidth: { lg: 400 } }}>
            <Stack spacing={3}>
              {contactMethods.map((method, index) => (
                <Card
                  key={method.title}
                  component="a"
                  href={method.href}
                  target={method.title !== 'Email' ? '_blank' : undefined}
                  rel={method.title !== 'Email' ? 'noopener noreferrer' : undefined}
                  variant="outlined"
                  className="card-lift"
                  sx={{
                    borderRadius: 4,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: method.gradient,
                    backdropFilter: 'blur(20px)',
                    textDecoration: 'none',
                    animation: `fadeInUp 0.8s ease ${index * 0.1}s both`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: `${method.color}60`,
                      boxShadow: `0 12px 40px ${method.color}30`,
                      transform: 'translateY(-6px)',
                    },
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2.5, p: 3 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '14px',
                        background: `${method.color}20`,
                        border: `1px solid ${method.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <AnimatedIcon
                        icon={method.icon}
                        size={24}
                        color={method.color}
                        animation={method.animation}
                        hover
                      />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: `${method.color}`,
                          mb: 0.5,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {method.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: '#f8fafc',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {method.value}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>

            {/* Additional info */}
            <Box
              className="fade-in-delay-2"
              sx={{
                mt: 5,
                p: 3,
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                }}
              >
                <Box component="span" sx={{ color: '#a78bfa', fontWeight: 600 }}>
                  Open to opportunities
                </Box>{' '}
                — I'm actively seeking junior developer and learning-focused roles where I can
                contribute meaningfully while growing my skills.
              </Typography>
            </Box>
          </Box>

          {/* Contact Form */}
          <Box sx={{ flex: 1.3 }}>
            <Card
              className="fade-in-delay-3"
              variant="outlined"
              sx={{
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    mb: 1,
                  }}
                >
                  Send a Message
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    color: '#94a3b8',
                    mb: 4,
                  }}
                >
                  Prefer a quick message? Fill out the form below and I'll follow up via email.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AnimatedIcon icon={User} size={18} color="#64748b" animation="pulse" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          bgcolor: 'rgba(255, 255, 255, 0.02)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(167, 139, 250, 0.4)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a78bfa',
                            boxShadow: '0 0 0 3px rgba(167, 139, 250, 0.1)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          '&.Mui-focused': {
                            color: '#a78bfa',
                          },
                        },
                      }}
                    />

                    <TextField
                      name="email"
                      label="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      type="email"
                      fullWidth
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AnimatedIcon icon={Mail} size={18} color="#64748b" animation="pulse" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          bgcolor: 'rgba(255, 255, 255, 0.02)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(167, 139, 250, 0.4)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a78bfa',
                            boxShadow: '0 0 0 3px rgba(167, 139, 250, 0.1)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          '&.Mui-focused': {
                            color: '#a78bfa',
                          },
                        },
                      }}
                    />

                    <TextField
                      name="message"
                      label="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      multiline
                      minRows={4}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ mt: 1.5 }}>
                            <AnimatedIcon icon={MessageSquare} size={18} color="#64748b" animation="pulse" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          bgcolor: 'rgba(255, 255, 255, 0.02)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(167, 139, 250, 0.4)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a78bfa',
                            boxShadow: '0 0 0 3px rgba(167, 139, 250, 0.1)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          '&.Mui-focused': {
                            color: '#a78bfa',
                          },
                        },
                      }}
                    />

                    <Button
                      type="submit"
                      endIcon={<AnimatedIcon icon={Send} size={18} animation="bounce" />}
                      sx={{
                        alignSelf: 'flex-start',
                        mt: 1,
                        px: 4,
                        py: 1.5,
                        background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                        boxShadow: '0 4px 20px rgba(167, 139, 250, 0.4)',
                        '&:hover': {
                          boxShadow: '0 6px 30px rgba(167, 139, 250, 0.6)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
