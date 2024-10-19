import { BodyTitle } from '@/components/AboutUs/body.styles';
import { JetImage } from './JetImage';

export const Header = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full overflow-hidden bg-black bg-opacity-50 sm:justify-between'>
        <div className='w-1/3 max-sm:hidden bg-opacity-20'>
          <JetImage />
        </div>
        <BodyTitle className='flex items-center justify-center '>STATISTICS</BodyTitle>
        <div className='hidden w-1/3 sm:block'></div>
      </div>
    </>
  );
};
