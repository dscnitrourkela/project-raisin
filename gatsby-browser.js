import './src/styles/global.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const wrapPageElement = ({ element }) => (
  <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
);
