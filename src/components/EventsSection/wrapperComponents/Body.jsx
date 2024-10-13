import { CardLabel } from '../eventCardComponents/Cardlabel';
import { EventCard } from '../eventCardComponents/EventCard';
import { Button } from '../utils/Button';
import { CardWrapper } from './CardWrapper';

export const Body = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 xsm:gap-20 md:gap-32 xl:gap-64  p-3 xsm:p-4 sm:p-8 md:p-12 lg:p-20 '>
        <CardWrapper />
        <Button />
      </div>
    </>
  );
};
