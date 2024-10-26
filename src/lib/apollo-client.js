import Cookies from 'js-cookie';

import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const MAX_RETRIES = 3;
const RETRY_TIMEOUT = 8000;

const reconnectFetch = async (uri, options, retries = 0) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RETRY_TIMEOUT);

  try {
    const response = await fetch(uri, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('Connected to server successfully');
    return response;
  } catch (error) {
    clearTimeout(timeoutId);

    if (retries < MAX_RETRIES) {
      console.log(`Retrying (${retries + 1}/${MAX_RETRIES})...`);
      return new Promise((resolve) =>
        setTimeout(() => resolve(reconnectFetch(uri, options, retries + 1)), RETRY_TIMEOUT),
      );
    }

    throw error;
  }
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_APOLLO_URI,
  fetch: reconnectFetch,
});

const authLink = setContext((_, { headers }) => {
  let token;

  if (typeof window !== 'undefined') {
    try {
      const userDataFromCookie = Cookies.get('userData');
      const parsedUserData = JSON.parse(userDataFromCookie);
      token = parsedUserData.token;
    } catch (error) {
      console.error(error);
      throw new Error('Error parsing userData from cookie');
    }
  }

  return {
    headers: {
      ...headers,
      Authorization: token || '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

export const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});
