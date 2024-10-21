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
    label: 'Name of the Institute',
    type: 'select',
    options: [
      {
        label: 'Silicon Institute of Technology, Bhubaneswar (SIT-BBSR)',
        value: 'Silicon Institute of Technology, Bhubaneswar (SIT-BBSR)',
      },
      {
        label: 'Odisha University of Technology and Research (OUTR)',
        value: 'Odisha University of Technology and Research (OUTR)',
      },
      {
        label: 'Gandhi Institute of Engineering and Technology, Gunupur (GIET Gunupur)',
        value: 'Gandhi Institute of Engineering and Technology, Gunupur (GIET Gunupur)',
      },
      {
        label: 'Centurion University of Technology and Management',
        value: 'Centurion University of Technology and Management',
      },
      {
        label: 'Biju Patnaik University of Technology (BPUT)',
        value: 'Biju Patnaik University of Technology (BPUT)',
      },
      {
        label: 'National Institute of Science and Technology, Berhampur (NIST Berhampur)',
        value: 'National Institute of Science and Technology, Berhampur (NIST Berhampur)',
      },
      {
        label: 'Kalinga Institute of Industrial Technology, Bhubaneswar (KIIT BBSR)',
        value: 'Kalinga Institute of Industrial Technology, Bhubaneswar (KIIT BBSR)',
      },
      {
        label: 'C. V. Raman Global University, Bhubaneswar (CV RAMAN)',
        value: 'C. V. Raman Global University, Bhubaneswar (CV RAMAN)',
      },
      {
        label: 'Parala Maharaja Engineering College',
        value: 'Parala Maharaja Engineering College',
      },
      {
        label: 'Indira Gandhi Institute of Technology, Sarang',
        value: 'Indira Gandhi Institute of Technology, Sarang',
      },
      {
        label: 'Veer Surendra Sai University of Technology (VSSUT)',
        value: 'Veer Surendra Sai University of Technology (VSSUT)',
      },
      {
        label: 'Gandhi Institute for Technological Advancement (GITA)',
        value: 'Gandhi Institute for Technological Advancement (GITA)',
      },
      {
        label: 'Pragati Maidan Engineering College (PMEC)',
        value: 'Pragati Maidan Engineering College (PMEC)',
      },
      {
        label: 'Bhubaneswar Engineering College (BEC BBSR)',
        value: 'Bhubaneswar Engineering College (BEC BBSR)',
      },
      {
        label: 'Indian Institute of Science Education and Research, Berhampur (IISER Berhampur)',
        value: 'Indian Institute of Science Education and Research, Berhampur (IISER Berhampur)',
      },
      {
        label: 'International Institute of Information Technology, Bhubaneswar (IIIT BBSR)',
        value: 'International Institute of Information Technology, Bhubaneswar (IIIT BBSR)',
      },
      {
        label: 'Indian Institute of Technology, Bhubaneswar (IIT BBSR)',
        value: 'Indian Institute of Technology, Bhubaneswar (IIT BBSR)',
      },
      {
        label: 'Rajendra Institute of Medical Sciences, Rourkela (RIMS, Rourkela)',
        value: 'Rajendra Institute of Medical Sciences, Rourkela (RIMS, Rourkela)',
      },
      {
        label: 'Municipal College, Rourkela',
        value: 'Municipal College, Rourkela',
      },
      {
        label: 'Government Autonomous College, Rourkela',
        value: 'Government Autonomous College, Rourkela',
      },
      {
        label: 'Badriprasad Institute of Technology, Sambalpur',
        value: 'Badriprasad Institute of Technology, Sambalpur',
      },
      {
        label: 'Sambalpur University',
        value: 'Sambalpur University',
      },
      {
        label: 'Utkalmani Gopabandhu College',
        value: 'Utkalmani Gopabandhu College',
      },
      {
        label: 'Government College of Engineering, Kalahandi, Bhawanipatna (GCEK Bhawanipatna)',
        value: 'Government College of Engineering, Kalahandi, Bhawanipatna (GCEK Bhawanipatna)',
      },
      {
        label: 'Birla Institute of Technology, Durg (BIT Durg)',
        value: 'Birla Institute of Technology, Durg (BIT Durg)',
      },
      {
        label: 'Birla Institute of Technology, Mesra (BIT Mesra)',
        value: 'Birla Institute of Technology, Mesra (BIT Mesra)',
      },
      {
        label: 'National Institute of Technology, Jamshedpur (NIT Jamshedpur)',
        value: 'National Institute of Technology, Jamshedpur (NIT Jamshedpur)',
      },
      {
        label: 'National Institute of Technology, Durgapur (NIT Durgapur)',
        value: 'National Institute of Technology, Durgapur (NIT Durgapur)',
      },
      {
        label: 'Indian Institute of Technology, Dhanbad (IIT Dhanbad)',
        value: 'Indian Institute of Technology, Dhanbad (IIT Dhanbad)',
      },
      {
        label: 'Indian Institute of Technology, Bhilai (IIT Bhilai)',
        value: 'Indian Institute of Technology, Bhilai (IIT Bhilai)',
      },
      {
        label: 'National Institute of Technology, Raipur (NIT Raipur)',
        value: 'National Institute of Technology, Raipur (NIT Raipur)',
      },
      {
        label: 'Jadavpur University',
        value: 'Jadavpur University',
      },
      {
        label: 'National Institute of Technology, Patna (NIT Patna)',
        value: 'National Institute of Technology, Patna (NIT Patna)',
      },
      {
        label: 'National Institute of Technology, Andhra Pradesh (NIT Andhra Pradesh)',
        value: 'National Institute of Technology, Andhra Pradesh (NIT Andhra Pradesh)',
      },
      {
        label: 'Vellore Institute of Technology, Vellore (VIT Vellore)',
        value: 'Vellore Institute of Technology, Vellore (VIT Vellore)',
      },
      {
        label: 'Trident Academy of Technology, Bhubaneswar (Trident BBSR)',
        value: 'Trident Academy of Technology, Bhubaneswar (Trident BBSR)',
      },
      {
        label: 'Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)',
        value: 'Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)',
      },
      {
        label: 'Others',
        value: 'others',
      },
    ],
    id: 'institute',
    className: 'w-full',
  },
  {
    label: 'Name of the University (Full Name) ',
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
    label: 'Referral Code',
    type: 'text',
    id: 'referralCode',
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
    className: 'oneliner',
  },
  {
    label: 'By proceeding, you agree to our terms and conditions.',
    type: 'checkbox',
    id: 'undertaking',
  },
  {
    label:
      'I have obtained authorization/permission from the institute and will bring it with me to the fest.',
    type: 'checkbox',
    id: 'permission',
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

export const campusAbassadorPara = `To become a Campus Ambassador for Innovision 2024, use the referral code below to get 50+ registrations and earn a certificate along with exclusive goodies!!`;

export const notAllowedInstitutes = [
  "Siksha 'O' Anusandhan ",
  'SOA',
  'ITER',
  'Institute of Technical Education and Research',
  'Institute of Technical Education and Research SOA',
  'ITER SOA',
];

export const undertakingContent = {
  link: 'https://www.google.com/',
  text: 'Undertaking Form for Authorization/Permission Letter',
};
