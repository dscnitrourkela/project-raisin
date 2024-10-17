import { Card } from '../card/card';
import { GraphMain } from '../PiChart/main';

export const Body = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-10 p-20 bg-black bg-opacity-50'>
        <div className='flex items-center justify-center'>
          <Card />
        </div>
        <GraphMain />
      </div>
    </>
  );
};
