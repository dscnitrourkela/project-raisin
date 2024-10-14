import { Header } from '../Header.jsx/header';
import { Body } from './Body';

export const EventSectionMain = () => {
  return (
    <>
      <div
        className='flex flex-col w-auto h-auto min-h-screen gap-20 pb-10 overflow-x-auto min-w-screen'
        style={{
          background:
            'conic-gradient(from 180deg at 50% -72.31%, #1a1a1a 0%,#1c4953 23%, #1a1a1a 30%,  #1a1a1a 65%,   #8e1e78 70%,  #1a1a1a 98%    )',
        }}
      >
        <Header />
        <Body />
      </div>
    </>
  );
};
