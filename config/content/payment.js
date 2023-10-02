export const PaymentDetails = ({ email, name, mobile }) => {
  const date = new Date();

  return {
    purpose: 'INNOVISION 2023 | Registration Fee',
    date: date.toDateString(),
    amount: 10,
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
  endNote: 'For any queries, contact us at: +91 1234567890',
  proceed: 'Proceed to Payment',
  cancel: 'Cancel',
  termsLink: 'https://www.google.com/',
};
