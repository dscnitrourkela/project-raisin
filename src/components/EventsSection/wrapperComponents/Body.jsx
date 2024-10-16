import { SubHeader } from '../Header.jsx/SubHeader';
import { Button } from '../utils/Button';
import { CardWrapper } from './CardWrapper';

export const Body = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 xsm:gap-20 md:gap-32 xl:gap-44 py-20 px-5  xsm:p-6 sm:p-8 md:p-12 lg:p-20 bg-black bg-opacity-50'>
        <CardWrapper />
        <SubHeader />
        <Button />
      </div>
    </>
  );
};
