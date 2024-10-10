export const formFields = [
  {
    label: 'Name',
    type: 'text',
    id: 'name',
  },
  {
    label: 'Email',
    type: 'email',
    id: 'email',
  },
  {
    label: 'Phone Number',
    type: 'tel',
    id: 'phone',
  },
  {
    label: 'Select your college',
    type: 'select',

    options: [
      { value: '1', label: 'College 1' },
      { value: '2', label: 'College 2' },
      { value: '3', label: 'College 3' },
    ],
    id: 'college',
  },
  {
    label: 'Roll Number',
    type: 'text',
    id: 'rollNumber',
  },
  {
    label: 'Upload your college ID Card',
    type: 'file',
    id: 'idCard',
  },
  {
    label: 'Select your gender',
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
    className: 'w-full sm:w-96',
  },
  {
    label: 'Do you want accomodation in NIT Rourkela?',
    type: 'checkbox',
    id: 'accomodation',
  },
  {
    label: 'Wish to be campus ambassador?',
    type: 'checkbox',
    id: 'campusAmbassador',
  },
];
