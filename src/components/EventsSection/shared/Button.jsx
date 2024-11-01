import { PrimaryButton } from '@/components/shared/Typography/Buttons';
import Link from 'next/link';

export const Button = () => {
  return (
    <>
      <Link href='/events'>
        <PrimaryButton>Explore More</PrimaryButton>
      </Link>
    </>
  );
};
