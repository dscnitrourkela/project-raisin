// lib/apollo-client.js
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const MAX_RETRIES = 3;
const RETRY_TIMEOUT = 8000;

const reconnectFetch = async (uri, options, retries = 0) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RETRY_TIMEOUT);

  return fetch(uri, { ...options, signal: controller.signal })
    .then((response) => {
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    })
    .catch((error) => {
      clearTimeout(timeoutId);
      if (retries < MAX_RETRIES) {
        console.log(`Retrying (${retries + 1}/${MAX_RETRIES})...`);
        return new Promise((resolve) =>
          setTimeout(() => resolve(customFetch(uri, options, retries + 1)), RETRY_TIMEOUT),
        );
      }
      throw error;
    });
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_APOLLO_URI,
  fetch: reconnectFetch,
});

const authLink = setContext((_, { headers }) => {
  let token;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('auth-token');
  }

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
