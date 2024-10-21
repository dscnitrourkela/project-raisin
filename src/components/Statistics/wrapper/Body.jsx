import { Card } from '../card/card';
import { GraphMain } from '../PiChart/main';

export const Body = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 py-20 md:p-20 bg-black bg-opacity-50 min-h-[100vh]'>
        <div className='flex justify-center items-center'>
          <Card />
        </div>
        {/* <GraphMain /> */}
      </div>
    </>
  );
};
