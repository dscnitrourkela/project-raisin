import { SecondaryButton } from '../shared/Typography/Buttons';
import { PaBullets } from './paginationBullet';

export const SButtons = ({ fn1, fn2, currentindex }) => {
  return (
    <>
      <div className='flex justify-center gap-10 w-full mt-8 items-center'>
        <SecondaryButton onClick={fn1}>Prev</SecondaryButton>

        <PaBullets currentindex={currentindex} />
        <SecondaryButton onClick={fn2} className='p-3 text-black rounded-lg bg-gray-300'>
          Next
        </SecondaryButton>
      </div>
    </>
  );
};
