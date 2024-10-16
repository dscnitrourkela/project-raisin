import { Header } from '../Header.jsx/header';
import { SubHeader } from '../Header.jsx/SubHeader';
import { Body } from './Body';

export const EventSectionMain = () => {
  return (
    <>
      <div
        className='flex flex-col w-auto h-auto min-h-screen overflow-x-auto min-w-screen'
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
