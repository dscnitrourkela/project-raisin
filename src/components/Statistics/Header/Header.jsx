import { BodyTitle } from '@/components/AboutUs/body.styles';
import { JetImage } from './JetImage';

export const Header = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center overflow-hidden'>
        <div className='w-1/3  max-sm:hidden '>
          <JetImage />
        </div>
        <BodyTitle>STATISTICS</BodyTitle>
        <div className='max-sm:hidden w-1/3'></div>
      </div>
    </>
  );
};
