/**
 * Possible stages
 * 1. selection if NITR student or not
 * 2. registration for NITR student
 * 3. registration for non NITR student
 * 4. transaction successful screen
 * 5. transaction unsuccessful screen
 */
export const STAGES = {
  TYPE_OF_USER: 'Are you an NITR Student?',
  NITR_STUDENT_FORM: 'NITR Student Register',
  NON_NITR_STUDENT_FORM: 'Register',
  TXN_SUCCESSFUL: 'Transaction Successful',
  TXN_UNSUCCESSFUL: 'Transaction Unsuccessful',
  REGISTRATION_CLOSED: 'Registration Closed',
};

export const INIT_STATE = {
  value: '',
  errorVisibility: false,
  errorMessage: '',
};

export const INPUTS = ({
  name = '',
  email = '',
  mobile = '',
  gender = '',
  state = '',
  city = '',
  college = '',
  stream = '',
  referredBy = '',
  rollNumber = '',
  password = '',
}) => ({
  name: {
    ...INIT_STATE,
    value: name,
    placeholder: 'Name',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[^a-zA-Z_ ]/gi,
    key: 'name',
    show: 'both',
    maxLength: 50,
    minLength: 1,
  },
  email: {
    ...INIT_STATE,
    value: email,
    placeholder: 'Email (same as your gmail)',
    readOnly: true,
    type: 'text',
    inputMode: 'email',
    regex: '/^[w-.]+@([w-]+.)+[w-]{2,4}$/g',
    key: 'email',
    show: 'both',
    maxLength: 50,
    minLength: 1,
  },
  mobile: {
    ...INIT_STATE,
    value: mobile,
    placeholder: 'Mobile Number (10 digits)',
    readOnly: false,
    type: 'text',
    inputMode: 'numeric',
    regex: /\D/g,
    key: 'mobile',
    show: 'both',
    maxLength: 10,
    minLength: 1,
  },
  gender: {
    ...INIT_STATE,
    value: gender,
    placeholder: 'Gender',
    readOnly: false,
    type: 'select',
    inputMode: 'select',
    regex: '',
    key: 'gender',
    show: 'both',
    options: ['Male', 'Female', 'Others'],
    maxLength: 50,
    minLength: 1,
  },
  state: {
    ...INIT_STATE,
    value: state,
    placeholder: 'State',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[^a-zA-Z_ ]/gi,
    key: 'state',
    show: 'non-nitr',
    maxLength: 50,
    minLength: 1,
  },
  city: {
    ...INIT_STATE,
    value: city,
    placeholder: 'City',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[^a-zA-Z_ ]/gi,
    key: 'city',
    show: 'non-nitr',
    maxLength: 50,
    minLength: 1,
  },
  college: {
    ...INIT_STATE,
    value: college,
    placeholder: 'College',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[^a-zA-Z_ ]/gi,
    key: 'college',
    show: 'non-nitr',
    maxLength: 50,
    minLength: 1,
  },
  stream: {
    ...INIT_STATE,
    value: stream,
    placeholder: 'Stream',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[^a-zA-Z_ ]/gi,
    key: 'stream',
    show: 'both',
    maxLength: 50,
    minLength: 1,
  },
  referredBy: {
    ...INIT_STATE,
    value: referredBy,
    placeholder: 'Referred By (phone number of referrer)',
    readOnly: false,
    type: 'text',
    inputMode: 'numeric',
    regex: /\D/g,
    key: 'referredBy',
    show: 'both',
    maxLength: 10,
    minLength: 1,
  },
  rollNumber: {
    ...INIT_STATE,
    value: rollNumber,
    placeholder: 'Roll Number',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[^a-zA-Z0-9_ ]/gi,
    key: 'rollNumber',
    show: 'nitr',
    maxLength: 50,
    minLength: 1,
  },
  password: {
    ...INIT_STATE,
    value: password,
    placeholder: 'Password',
    readOnly: false,
    type: 'password',
    inputMode: 'text',
    regex: '',
    key: 'password',
    show: 'nitr',
    maxLength: 50,
    minLength: 1,
  },
});
