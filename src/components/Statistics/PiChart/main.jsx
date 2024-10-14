import { Graph } from './Graph';
import { Label } from './Label';

export const GraphMain = () => {
  return (
    <>
      <div className='flex justify-center items-center pl-4 xsm:pl-8 sm:pl-12 md:pl-20 lg:pl-32'>
        <Label />
        <Graph />
      </div>
    </>
  );
};
