import React from 'react';
import { Box, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 6,
        py: 3,
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          px: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {year} Simphiwe. Built with React, TypeScript, and Material UI.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Open to junior developer and learning-focused roles.
        </Typography>
      </Box>
    </Box>
  );
};

