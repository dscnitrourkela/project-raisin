import { Card } from '../card/card';
import { Label } from '../PiChart/Label';
import { GraphMain } from '../PiChart/main';

export const Body = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 p-20'>
        <div className='flex justify-center items-center'>
          <Card />
        </div>
        <GraphMain />
      </div>
    </>
  );
};
