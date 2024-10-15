import { GraphUrl } from '@/config/content/Statistics/GraphData';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Graph = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <Image width={697} height={766} src={GraphUrl} alt='graphurl' className='min-w-72' />
      </motion.div>
    </>
  );
};
