import { GraphUrl } from '@/config/content/Statistics/GraphData';
import Image from 'next/image';

export const Graph = () => {
  return (
    <>
      <Image width={697} height={766} src={GraphUrl} alt='graphurl' />
    </>
  );
};
