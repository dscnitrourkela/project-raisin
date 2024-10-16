import { Graph } from './Graph';
import { Label } from './Label';

export const GraphMain = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col justify-center items-center w-full'>
        <Label />
        <Graph />
      </div>
    </>
  );
};
