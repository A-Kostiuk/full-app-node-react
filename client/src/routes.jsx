import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LinksPage from './pages/links-page';
import CreatePage from './pages/create-page';
import DetailPage from './pages/detail-page';
import AuthPage from './pages/auth-page';

function UseRoutes(isAuthenticated) {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/links" element={<LinksPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/create" />} />
      </Routes>);
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default UseRoutes;
