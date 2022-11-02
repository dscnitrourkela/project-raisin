import './src/styles/global.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContextProvider from './src/utils/Auth';

const queryClient = new QueryClient();

export const wrapRootElement = ({ element }) => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>{element}</AuthContextProvider>
  </QueryClientProvider>
);
