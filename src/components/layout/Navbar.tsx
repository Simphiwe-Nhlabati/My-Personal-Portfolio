import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button as MuiButton,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: 'blur(20px)',
          bgcolor: 'rgba(10, 10, 15, 0.7)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          zIndex: (t) => t.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ maxWidth: 'xl', width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
          {/* Logo / Name */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              '&::after': {
                content: '"."',
                position: 'absolute',
                color: '#a78bfa',
                WebkitTextFillColor: '#a78bfa',
              },
            }}
          >
            Simphiwe
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {links.map((link) => {
              const active = location.pathname === link.path;
              return (
                <MuiButton
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    textTransform: 'none',
                    fontWeight: active ? 600 : 500,
                    color: active ? '#a78bfa' : '#94a3b8',
                    position: 'relative',
                    borderRadius: 999,
                    px: 2.5,
                    py: 1,
                    fontSize: '0.9rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 'inherit',
                      background: 'rgba(167, 139, 250, 0.1)',
                      opacity: active ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      bgcolor: 'rgba(167, 139, 250, 0.08)',
                      color: '#a78bfa',
                    },
                  }}
                >
                  {link.label}
                </MuiButton>
              );
            })}
          </Box>

          {/* CTA Button - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            <MuiButton
              component={RouterLink}
              to="/contact"
              variant="contained"
              sx={{
                borderRadius: 999,
                px: 3,
                py: 1,
                fontSize: '0.9rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                boxShadow: '0 4px 15px rgba(167, 139, 250, 0.3)',
                textTransform: 'none',
                '&:hover': {
                  boxShadow: '0 6px 25px rgba(167, 139, 250, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Let's Talk
            </MuiButton>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ 
              display: { xs: 'flex', md: 'none' }, 
              color: '#f8fafc',
              '&:hover': {
                background: 'rgba(167, 139, 250, 0.1)',
              },
            }}
          >
            <Menu size={24} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2.5, pt: 2 }}>
          <IconButton 
            onClick={() => setDrawerOpen(false)} 
            aria-label="Close menu"
            sx={{
              color: '#94a3b8',
              '&:hover': {
                background: 'rgba(167, 139, 250, 0.1)',
                color: '#a78bfa',
              },
            }}
          >
            <X size={24} />
          </IconButton>
        </Box>
        
        <Box sx={{ px: 3, pb: 2 }}>
          <Typography
            sx={{
              fontSize: '1.75rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #a78bfa 0%, #2dd4bf 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 4,
            }}
          >
            Menu
          </Typography>
        </Box>

        <List sx={{ px: 2 }}>
          {links.map((link, index) => {
            const active = location.pathname === link.path;
            return (
              <ListItemButton
                key={link.path}
                component={RouterLink}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
                selected={active}
                sx={{
                  borderRadius: 3,
                  mb: 1,
                  py: 2,
                  px: 2.5,
                  transition: 'all 0.3s ease',
                  animation: `fadeInRight 0.5s ease ${index * 0.05}s both`,
                  '&.Mui-selected': {
                    background: 'rgba(167, 139, 250, 0.15)',
                    border: '1px solid rgba(167, 139, 250, 0.2)',
                    '&:hover': {
                      background: 'rgba(167, 139, 250, 0.2)',
                    },
                  },
                  '&:hover': {
                    background: 'rgba(167, 139, 250, 0.08)',
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: active ? 600 : 500,
                    color: active ? '#a78bfa' : '#f8fafc',
                    fontSize: '1rem',
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        {/* Mobile CTA */}
        <Box sx={{ px: 3, mt: 2 }}>
          <MuiButton
            component={RouterLink}
            to="/contact"
            variant="contained"
            onClick={() => setDrawerOpen(false)}
            fullWidth
            sx={{
              borderRadius: 999,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
              boxShadow: '0 4px 15px rgba(167, 139, 250, 0.3)',
              textTransform: 'none',
              '&:hover': {
                boxShadow: '0 6px 25px rgba(167, 139, 250, 0.5)',
              },
            }}
          >
            Let's Talk
          </MuiButton>
        </Box>
      </Drawer>
    </>
  );
};
