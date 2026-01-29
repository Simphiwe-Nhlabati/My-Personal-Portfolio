import React from 'react';
import { AppBar, Box, Button as MuiButton, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: '5px solid',
        borderColor: 'divider',
        bgcolor: 'rgba(201,160,220,0.16)',
        color: 'primary.main',
        '&:hover': {
          bgcolor: 'rgba(201,160,220,0.16)',
        },
      }}
    >
      <Toolbar sx={{ maxWidth: 'lg', width: '100%', mx: 'auto' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Simphiwe
          
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {links.map((link) => {
            const active = location.pathname === link.path;
            return (
              <MuiButton
                key={link.path}
                component={RouterLink}
                to={link.path}
                color={active ? 'secondary' : 'inherit'}
                sx={{
                  textTransform: 'none',
                  fontWeight: active ? 600 : 400,
                  bgcolor: active ? 'rgba(143, 80, 151, 0.61)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(201,160,220,0.16)',
                  },
                  borderRadius: 999,
                  px: 2,
                  py: 1,
                }}
              >
                {link.label}
              </MuiButton>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

