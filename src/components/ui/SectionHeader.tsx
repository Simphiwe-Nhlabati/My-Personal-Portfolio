import React from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export const SectionHeader: React.FC<Props> = ({ eyebrow, title, description }) => {
  return (
    <Box textAlign="left" mb={3}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ letterSpacing: '0.12em', color: 'text.secondary' }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" sx={{ mb: description ? 1 : 0 }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary" maxWidth={540}>
          {description}
        </Typography>
      )}
    </Box>
  );
};
