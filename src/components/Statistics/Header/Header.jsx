import { JetImage } from './JetImage';

export const Header = () => {
  return (
    <>
      <div className='bg-[#010611] h-[80px] sm:h-[100px] md:h-[110px] lg:h-[150px] w-full flex justify-between items-center overflow-hidden'>
        <div className='w-1/3  max-sm:hidden '>
          <JetImage />
        </div>
        <div className='text-center w-full text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-normal lg:leading-[97.78px] text-transparent bg-clip-text bg-gradient-to-r from-[#188FC3] to-[#0B445D] font-spaceX'>
          STATISTICS
        </div>
        <div className='max-sm:hidden w-1/3'></div>
      </div>
    </>
  );
};
