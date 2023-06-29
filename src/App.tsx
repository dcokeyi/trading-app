import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';
import { Accounts } from './pages/AccountPage';
import { SignIn } from './pages/SignInPage';
import { ProtectedRoute } from './routes';
import { GetUserDocument } from './graphql';
import { useQuery } from '@apollo/client';
import { useAuthContext } from './contexts';
import { AuthService } from './services';

export const App = () => {
  const {setAuthState} = useAuthContext()
  const isTokenAvailable = AuthService.getAccessToken()
  const {data} = useQuery(GetUserDocument, {
    skip: !isTokenAvailable
  });

  useEffect(() => {
    setAuthState({user: data?.user})
  }, [data, setAuthState])
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/accounts" element={
        <ProtectedRoute>
          <Accounts />
        </ProtectedRoute>} 
      />
    </Routes>
  );
};