import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';
import './App.css';

export const App: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AppRoutes />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
