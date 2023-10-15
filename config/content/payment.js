export const PaymentDetails = ({ email, name, mobile }) => {
  const date = new Date();

  return {
    purpose: 'INNOVISION 2023 | Registration Fee',
    date: date.toDateString(),
    amount: 899,
    email,
    buyerName: name,
    phone: mobile,
  };
};

export const PaymentContent = {
  title: 'Payment',
  description: 'Pay the registration fee to complete your registration.',
  warning: 'Note: Registration fee is non-refundable.',
  info: 'Check your details before proceeding to payment.',
  endNote: 'For any queries, contact us at: reachus.inno@gmail.com',
  caption: 'Early Bird Registration Fee',
  proceed: 'Proceed to Payment',
  cancel: 'Cancel',
  terms: [
    {
      id: 'privacy',
      term: 'I have read and agree to the ',
      linkText: 'Privacy Policy',
      link: 'https://www.google.com',
    },
    {
      id: 'code',
      term: 'I have read and agree to the ',
      linkText: 'Code of Conduct',
      link: 'https://www.google.com',
    },
    {
      id: 'refund',
      term: 'I have read and agree to the ',
      linkText: 'Refund Policy',
      link: 'https://www.google.com',
    },
    {
      id: 'terms',
      term: 'I have read and agree to the ',
      linkText: 'Terms and Conditions',
      link: 'https://www.google.com',
    },
  ],
};
