import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';
import { Accounts } from './pages/AccountPage';
import { SignIn } from './pages/SignInPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/account" element={<Accounts />} />
    </Routes>
  );
};