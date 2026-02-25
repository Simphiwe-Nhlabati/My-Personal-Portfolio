import React from 'react';
import { Card, CardContent, CardActions, Chip, Stack, Typography, Box } from '@mui/material';
import { Button } from '../common/Button';

type Props = {
  title: string;
  summary: string;
  tech: string[];
  onViewProject?: () => void;
};

export const ProjectCard: React.FC<Props> = ({ title, summary, tech, onViewProject }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        borderColor: 'divider',
        background:
          'linear-gradient(140deg, rgba(196,165,255,0.08), rgba(244,114,182,0.06))',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h3" sx={{ fontSize: '1.15rem', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {summary}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {tech.map((item) => (
            <Chip
              key={item}
              label={item}
              size="small"
              sx={{
                bgcolor: 'rgba(143,155,255,0.08)',
                borderRadius: 999,
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
        <Box flexGrow={1} />
        <Button size="small" color="secondary" onClick={onViewProject}>
          View GitHub
        </Button>
      </CardActions>
    </Card>
  );
};
