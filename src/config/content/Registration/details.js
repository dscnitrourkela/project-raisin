export const formFields = [
  {
    label: 'Name',
    type: 'text',
    id: 'name',
    className: 'w-full',
  },
  {
    label: 'Email',
    type: 'email',
    id: 'email',
    className: 'w-full',
  },
  {
    label: 'Phone Number',
    type: 'tel',
    id: 'phone',
    className: 'w-full',
  },

  {
    label: 'Name of the Institute  (Full Name) ',
    type: 'text',
    id: 'institute',
    className: 'w-full',
  },
  {
    label: 'Name of the Univercity (Full Name) ',
    type: 'text',
    id: 'university',
    className: 'w-full',
  },
  {
    label: 'Roll Number',
    type: 'text',
    id: 'rollNumber',
  },
  {
    label: 'Upload College ID',
    type: 'file',
    id: 'idCard',
  },

  {
    label: 'Gender',
    type: 'select',
    options: [
      {
        value: 'female',
        label: 'Female',
      },
      {
        value: 'male',
        label: 'Male',
      },
    ],
    id: 'gender',
    className: '',
  },
  {
    label: 'Authorisation/Permission by Institute',
    type: 'file',
    id: 'permission',
  },
  {
    label: 'Screenshot of payment',
    type: 'file',
    id: 'payment',
  },
  {
    label: 'By proceeding, you agree to our terms and conditions.',
    type: 'checkbox',
    id: 'undertaking',
  },
];

export const campusAmbassadorInput = {
  label: 'Wish to be campus ambassador?',
  type: 'checkbox',
  id: 'campusAmbassador',
};

export const buttonImage =
  'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728800884/uploadButton_wvzexw.png';
export const beamImage =
  'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728811020/Line_10_aeg3tc.png';
