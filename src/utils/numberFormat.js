const numberFormat = (value) => {
  if (!value) return 0;

  return Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);
};

export default numberFormat;
