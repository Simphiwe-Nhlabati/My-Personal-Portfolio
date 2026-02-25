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
          backdropFilter: 'blur(18px)',
          bgcolor: 'rgba(5, 6, 22, 0.92)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          zIndex: (t) => t.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ maxWidth: 'lg', width: '100%', mx: 'auto' }}>
          {/* Logo / Name */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #C4A5FF 0%, #F472B6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Simphiwe.
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {links.map((link) => {
              const active = location.pathname === link.path;
              return (
                <MuiButton
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    textTransform: 'none',
                    fontWeight: active ? 600 : 400,
                    color: active ? 'primary.main' : 'text.secondary',
                    position: 'relative',
                    borderRadius: 999,
                    px: 2.5,
                    py: 1,
                    '&::after': active
                      ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: '25%',
                          width: '50%',
                          height: 3,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                        }
                      : {},
                    '&:hover': {
                      bgcolor: 'rgba(143,155,255,0.08)',
                    },
                  }}
                >
                  {link.label}
                </MuiButton>
              );
            })}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
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
            width: 260,
            bgcolor: 'background.default',
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <X size={22} />
          </IconButton>
        </Box>
        <List>
          {links.map((link) => {
            const active = location.pathname === link.path;
            return (
              <ListItemButton
                key={link.path}
                component={RouterLink}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
                selected={active}
                sx={{
                  borderRadius: 2,
                  mx: 1.5,
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(143,155,255,0.12)',
                    '&:hover': {
                      bgcolor: 'rgba(143,155,255,0.18)',
                    },
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: active ? 600 : 400,
                    color: active ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

