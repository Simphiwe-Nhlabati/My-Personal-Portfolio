import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';
import { ProjectDetail } from '../pages/ProjectDetail';
import { Contact } from '../pages/Contact';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

