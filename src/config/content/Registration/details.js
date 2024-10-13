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
    label: 'Your College',
    type: 'text',
    id: 'college',
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
    label: 'Do you want accomodation in NIT Rourkela?',
    type: 'checkbox',
    id: 'accomodation',
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
      {
        value: 'others',
        label: 'Others',
      },
    ],
    id: 'gender',
    className: '',
  },

  {
    label: 'Wish to be campus ambassador?',
    type: 'checkbox',
    id: 'campusAmbassador',
  },
];

export const buttonImage =
  'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1728800884/uploadButton_wvzexw.png';
