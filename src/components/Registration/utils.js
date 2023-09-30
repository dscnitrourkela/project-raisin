import { toast } from 'react-toastify';

// Define enum for show
export const SHOW = {
  NITR: ['both', 'nitr'],
  NON_NITR: ['both', 'non-nitr'],
};

export const verify = ({ id, type, value, regex, minLength, maxLength, setErrorMessage }) => {
  if (!value || type === 'select') return;
  const currValue = value.trim();

  if (minLength && currValue.length < minLength) {
    setErrorMessage(id, `Minimum length is ${minLength}`, true);
  } else if (maxLength && currValue.length > maxLength) {
    setErrorMessage(id, `Maximum length is ${maxLength}`, true);
  } else if (regex && !regex.test(currValue)) {
    setErrorMessage(id, 'Invalid input', true);
  } else {
    setErrorMessage(id, '', false);
  }
};

export const verifyAll = ({ inputData, isNITR, verified }) => {
  const filteredInput = Object.values(inputData)
    .filter(({ key }) => key !== 'password')
    .filter(({ show }) => (isNITR ? SHOW.NITR.includes(show) : SHOW.NON_NITR.includes(show)));
  const isVerified = filteredInput.every(
    ({ errorMessage, errorVisible }) => !errorMessage || !errorVisible,
  );
  const isFilled = filteredInput.every(({ value, optional }) => value || optional);

  // Add state, city, and college for NITR students
  if (isNITR) {
    filteredInput.push(
      {
        key: 'state',
        value: 'Odisha',
      },
      {
        key: 'city',
        value: 'Rourkela',
      },
      {
        key: 'college',
        value: 'NIT Rourkela',
      },
    );
  }

  if (isVerified && isFilled && (!isNITR || verified)) {
    return filteredInput.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});
  }
  toast.error('Please fill all the fields correctly');
  return false;
};
