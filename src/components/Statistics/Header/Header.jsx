import { BodyTitle } from '@/components/AboutUs/body.styles';
import { JetImage } from './JetImage';

export const Header = () => {
  return (
    <>
      <div className='w-full flex justify-center sm:justify-between items-center overflow-hidden'>
        <div className='w-1/3  max-sm:hidden '>
          <JetImage />
        </div>
        <BodyTitle className='flex justify-center items-center'>STATISTICS</BodyTitle>
        <div className='w-1/3  sm:block hidden'></div>
      </div>
    </>
  );
};
