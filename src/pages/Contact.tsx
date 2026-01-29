import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const Contact: React.FC = () => {
  const email = 'thomasnhlabati770@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/simphiwe-nhlabati-691106327/';
  const github = 'https://github.com/simphiwe-nhlabati';

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        <Stack spacing={4}>
          {/* Intro + direct links */}
          <Stack spacing={1.5}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: '0.14em', color: 'text.secondary' }}
            >
              CONTACT
            </Typography>
            <Typography variant="h1">
              Easy ways to get in touch.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
              Email and LinkedIn are the fastest ways to reach me. I&apos;m happy to share more
              details about projects, walk through code, or discuss how I can support your team.
            </Typography>

            <Stack spacing={0.5} mt={1.5}>
              <Typography variant="body2" color="text.secondary">
                Email
              </Typography>
              <MuiLink href={`mailto:${email}`} underline="hover">
                {email}
              </MuiLink>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                LinkedIn
              </Typography>
              <MuiLink href={linkedIn} target="_blank" rel="noopener noreferrer" underline="hover">
                View LinkedIn profile
              </MuiLink>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                GitHub
              </Typography>
              <MuiLink href={github} target="_blank" rel="noopener noreferrer" underline="hover">
                View GitHub
              </MuiLink>
            </Stack>
          </Stack>

          {/* Optional simple contact form */}
          <Card
            variant="outlined"
            sx={{
              maxWidth: 560,
              borderRadius: 3,
              borderColor: 'divider',
              background: 'linear-gradient(135deg, rgba(201,160,220,0.06), rgba(143,155,255,0.04))',
            }}
          >
            <CardContent>
              <Typography variant="h2" sx={{ fontSize: '1.4rem', mb: 1 }}>
                Prefer a quick message?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                You can use this simple form to send a short note. I&apos;ll follow up via email.
              </Typography>

              <Stack spacing={2}>
                <TextField
                  label="Your name"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Your email"
                  variant="outlined"
                  size="small"
                  type="email"
                  fullWidth
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  minRows={3}
                />
                <Button
                  color="secondary"
                  sx={{
                    alignSelf: 'flex-start',
                    mt: 1,
                  }}
                >
                  Send message
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

