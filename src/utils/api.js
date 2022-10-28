import axios from 'axios';

// Configure and an instance of axios
export const avenueApi = axios.create({
  baseURL: 'https://avenue-api.nitrkl.in',
  // baseURL: 'http://localhost:9000',
  timeout: 60000,
  timeoutErrorMessage: 'Request Timeout: Please try again',
});

export const zimbraApi = axios.create({
  baseURL: 'https://mail.nitrkl.ac.in/home/~/',
  timeout: 60000,
  timeoutErrorMessage: 'Request Timeout: Please try again',
});
