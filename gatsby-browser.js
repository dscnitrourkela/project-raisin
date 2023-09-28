import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './src/utils/Auth';
import { Layout } from './src/components';

const queryClient = new QueryClient();

// Get fonts on initial load of the app
export const onRenderBody = ({ setHeadComponents }) => {
  // @import url('fonts/Roslindale/font.css');
  setHeadComponents([
    <link
      rel='preload'
      href='/fonts/Roslindale/fonts/RoslindaleText-BoldItalic-Testing.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='Roslindale'
    />,
    <link
      rel='preload'
      href='/fonts/Roslindale/fonts/RoslindaleText-Bold-Testing.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='Roslindale2'
    />,
    <link
      rel='preload'
      href='/fonts/Roslindale/fonts/RoslindaleText-MediumItalic-Testing.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='Roslindale3'
    />,
    <link
      rel='preload'
      href='/fonts/Roslindale/fonts/RoslindaleText-MediumItalic-Testing.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='Roslindale4'
    />,
    <link
      rel='preload'
      href='/fonts/Roslindale/fonts/RoslindaleDeckNarrow-SemiBoldItalic-Testing.woff'
      as='font'
      type='font/woff'
      crossOrigin='anonymous'
      key='Roslindale5'
    />,
    <link
      rel='preload'
      href='/fonts/Roslindale/fonts/RoslindaleDeckNarrow-SemiBoldItalic-Testing.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='Roslindale6'
    />,
  ]);
};

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>{element}</AuthContextProvider>
    <ToastContainer />
  </QueryClientProvider>
);
