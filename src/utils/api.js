import axios from 'axios';

// Configure and an instance of axios
export const avenueApi = axios.create({
  baseURL: process.env.GATSBY_AVENUE_API_URL,
  timeout: 60000,
  timeoutErrorMessage: 'Request Timeout: Please try again',
});

export const zimbraApi = axios.create({
  baseURL: 'https://mail.nitrkl.ac.in/home/~/',
  timeout: 60000,
  timeoutErrorMessage: 'Request Timeout: Please try again',
});
