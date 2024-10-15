import { CardLabel } from '../eventCardComponents/Cardlabel';
import { EventCard } from '../eventCardComponents/EventCard';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 150 } },
};

export const CardWrapper = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20'
      >
        {item.map((items, index) => (
          <motion.div
            key={index}
            variants={itemAnimation}
            className='p-20 flex flex-col items-center gap-10'
          >
            <EventCard label={items} />
            <CardLabel />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

const item = ['FLaGSHIP', 'GUEST LECTURE', 'MaIN EvENTS'];
