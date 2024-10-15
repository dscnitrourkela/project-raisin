import { Header } from '../Header/Header';
import { Body } from './Body';

export const StatisticsMain = () => {
  return (
    <>
      <div
        className='flex flex-col w-auto h-auto min-h-screen overflow-x-auto min-w-screen xsm:gap-10 md:gap-0 overflow-hidden'
        style={{
          background:
            "url('https://res.cloudinary.com/dpmlrxlzr/image/upload/v1728916828/Random_static_7_tdouie.png'), conic-gradient(from 180deg, #1a1a1a 0%, #1c4953 23%, #1a1a1a 50%, #8e1e78 70%, #1a1a1a 98%)",
        }}
      >
        <Header />
        <Body />
      </div>
    </>
  );
};
