import { Heading1, Heading2 } from '../shared/Typography/Headings';

export const DescriptionHeader = ({ label }) => {
  return (
    <>
      <Heading2>{label}</Heading2>
    </>
  );
};

export const SectionHeader = ({ label }) => {
  return (
    <>
      <Heading1>{label}</Heading1>
    </>
  );
};
