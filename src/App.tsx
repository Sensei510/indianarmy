import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ArmyCategoriesPage from './pages/ArmyCategoriesPage';
import HowToApplyPage from './pages/HowToApplyPage';
import LearningResourcesPage from './pages/LearningResourcesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<ArmyCategoriesPage />} />
        <Route path="how-to-apply/:branch" element={<HowToApplyPage />} />
        <Route path="resources" element={<LearningResourcesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;