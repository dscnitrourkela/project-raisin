import { Header } from '../Header.jsx/header';
import { Body } from './Body';

export const EventSectionMain = () => {
  return (
    <>
      <div
        className='min-h-screen h-auto min-w-screen overflow-x-auto w-auto flex flex-col gap-20 pb-64'
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
