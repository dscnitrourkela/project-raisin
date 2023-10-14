import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './src/utils/Auth';
import { Layout } from './src/components';

const queryClient = new QueryClient();

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{element}</AuthContextProvider>
      <ToastContainer position='bottom-right' autoClose={5000} />
    </QueryClientProvider>
  </StrictMode>
);
