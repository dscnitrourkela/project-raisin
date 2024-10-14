import { SubHeader } from './SubHeader';

export const Header = () => {
  return (
    <>
      <div id='events'>
        <div className='bg-[#131313] h-[80px] sm:h-[100px] md:h-[110px] lg:h-[150px] w-full flex items-center overflow-hidden'>
          <div className='font-spaceX font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] lg:leading-[97.78] w-full text-center text-[#188FC3]'>
            EVENTS
          </div>
        </div>
        <SubHeader />
      </div>
    </>
  );
};
