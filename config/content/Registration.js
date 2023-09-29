/**
 * Registration Flow
 * 1. User selects if he/she is an NITR student or not
 * 2. If yes, verify email and then fill form
 * 3. If no, fill NON-NITR form
 * 4. For NON-NITR students, button to redirect to Payment page
 * 5. Payment page to show details of payment and redirect to payment gateway
 * 6. After payment, redirect to success page
 * 7. If error in payment, redirect to error page
 */

/**
 * Possible stages
 * 1. selection if NITR student or not
 * 2. if NITR student, verify email
 * 3. if NITR student, fill form
 * 4. if non-NITR student, fill form
 * 5. if registration closed, show message
 */
export const STAGES = {
  TYPE_OF_USER: 'Are you an NITR Student?',
  VERIFY_NITR: 'Verify Zimbra Email',
  STUDENT_FORM: 'Register',
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
    placeHolder: 'Name',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    color: 'cyan',
    regex: /[a-zA-Z_ ]/gi,
    key: 'name',
    show: 'both',
    maxLength: 50,
    minLength: 1,
  },
  email: {
    ...INIT_STATE,
    value: email,
    placeHolder: 'Email (same as your gmail)',
    readOnly: true,
    type: 'text',
    inputMode: 'email',
    regex: '/^[w-.]+@([w-]+.)+[w-]{2,4}$/g',
    key: 'email',
    show: 'both',
    maxLength: 50,
    minLength: 1,
    color: 'purple',
  },
  mobile: {
    ...INIT_STATE,
    value: mobile,
    placeHolder: 'Mobile Number',
    readOnly: false,
    type: 'text',
    inputMode: 'numeric',
    regex: /\+?[0-9]{0,2} ?[0-9]{5} ?[0-9]{5}/gi, // +91 12345 12345 or 1234512345
    key: 'mobile',
    show: 'both',
    maxLength: 10,
    minLength: 1,
    color: 'orange',
  },
  gender: {
    ...INIT_STATE,
    value: gender,
    placeHolder: 'Gender',
    readOnly: false,
    type: 'select',
    inputMode: 'select',
    regex: '',
    key: 'gender',
    show: 'both',
    options: ['MALE', 'FEMALE', 'OTHERS'],
    maxLength: 50,
    minLength: 1,
  },
  state: {
    ...INIT_STATE,
    value: state,
    placeHolder: 'State',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[a-zA-Z_ ]/gi,
    key: 'state',
    show: 'non-nitr',
    maxLength: 50,
    minLength: 1,
  },
  city: {
    ...INIT_STATE,
    value: city,
    placeHolder: 'City',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[a-zA-Z_ ]/gi,
    key: 'city',
    show: 'non-nitr',
    maxLength: 50,
    minLength: 1,
  },
  college: {
    ...INIT_STATE,
    value: college,
    placeHolder: 'College',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[a-zA-Z_ ]/gi,
    key: 'college',
    show: 'non-nitr',
    maxLength: 50,
    minLength: 1,
  },
  stream: {
    ...INIT_STATE,
    value: stream,
    placeHolder: 'Stream',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[a-zA-Z- ]/gi,
    key: 'stream',
    show: 'both',
    maxLength: 50,
    minLength: 1,
  },
  referredBy: {
    ...INIT_STATE,
    value: referredBy,
    placeHolder: 'Referred By',
    caption: 'Input the phone number of the person who referred you to this event.',
    readOnly: false,
    type: 'text',
    inputMode: 'numeric',
    regex: /\+?[0-9]{0,2} ?[0-9]{5} ?[0-9]{5}/gi, // +91 12345 12345 or 1234512345,
    key: 'referredBy',
    show: 'both',
    maxLength: 10,
    minLength: 1,
    color: 'blue',
  },
  rollNumber: {
    ...INIT_STATE,
    value: rollNumber,
    placeHolder: 'Roll Number',
    readOnly: false,
    type: 'text',
    inputMode: 'text',
    regex: /[0-9]{3}[a-zA-Z]{2}[0-9]{4}/gi,
    key: 'rollNumber',
    show: 'nitr',
    maxLength: 50,
    minLength: 1,
    color: 'cyan',
    button: {
      text: 'Verify',
      onClick: () => {},
      color: 'black',
    },
  },
  password: {
    ...INIT_STATE,
    value: password,
    placeHolder: 'Password',
    caption: "We don't store your password. It is only used to verify your identity.",
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
