import React from 'react';
import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/simphiwe-nhlabati',
      label: 'GitHub',
      color: '#f472b6',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/simphiwe-nhlabati-691106327/',
      label: 'LinkedIn',
      color: '#2dd4bf',
    },
    {
      icon: Mail,
      href: 'mailto:thomasnhlabati770@gmail.com',
      label: 'Email',
      color: '#a78bfa',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
      }}
    >
      {/* Subtle gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(167, 139, 250, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          maxWidth: 'xl',
          mx: 'auto',
          px: { xs: 3, sm: 4 },
          py: { xs: 6, md: 8 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          {/* Left: Branding */}
          <Box>
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 1,
              }}
            >
              Simphiwe.
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: '#64748b',
                maxWidth: 280,
                lineHeight: 1.6,
              }}
            >
              Building scalable, type-safe applications with clean architecture
              and AI-enhanced workflows.
            </Typography>
          </Box>

          {/* Center: Social Links */}
          <Stack direction="row" spacing={2}>
            {socialLinks.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#94a3b8',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: `${link.color}15`,
                    borderColor: `${link.color}60`,
                    color: link.color,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 20px ${link.color}30`,
                  },
                }}
              >
                <link.icon size={20} />
              </Box>
            ))}
          </Stack>

          {/* Right: Copyright */}
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#64748b',
                mb: 1,
              }}
            >
              © {year} Simphiwe Nhlabati
            </Typography>
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 1,
              }}
            >
              Built with <Heart size={12} style={{ color: '#f472b6', fill: '#f472b6' }} /> using
              React & Material UI
            </Typography>
          </Box>
        </Stack>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: '#475569',
            }}
          >
            Open to junior developer and learning-focused roles
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink
              href="#"
              sx={{
                fontSize: '0.8rem',
                color: '#64748b',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#a78bfa',
                },
              }}
            >
              Privacy
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                fontSize: '0.8rem',
                color: '#64748b',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#a78bfa',
                },
              }}
            >
              Terms
            </MuiLink>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
