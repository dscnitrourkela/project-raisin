'use client';
import { AnimatePresence, motion } from 'framer-motion';

import { Container, Message } from '@/components/Loading/loading.styles';

function Loader({ className }) {
  return (
    <AnimatePresence mode='wait'>
      <Container className={className}>
        <motion.span
          key='loader'
          className='loader'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        />
        <Message
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Loading...
        </Message>
      </Container>
    </AnimatePresence>
  );
}

export default Loader;
