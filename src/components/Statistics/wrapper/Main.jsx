import { Header } from '../Header/Header';
import { Body } from './Body';

export const StatisticsMain = () => {
  return (
    <>
      <div
        className='min-h-screen h-auto min-w-screen overflow-x-auto w-auto flex flex-col xsm:gap-10 md:gap-20 '
        style={{
          background:
            'conic-gradient(from 180deg at 50% -72.31%, #0B0B0B 0deg, #0E2C33 38.51deg, #000000 109.1deg, #000000 246.44deg, #4E0E48 292.59deg, #0B0B0B 360deg)',
        }}
      >
        <Header />
        <Body />
      </div>
    </>
  );
};
