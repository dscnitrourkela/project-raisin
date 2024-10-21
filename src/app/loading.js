'use client';
import { Container, Message } from '@/components/Loading/loading.styles';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  return (
    <AnimatePresence>
      <Container>
        <motion.span
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
