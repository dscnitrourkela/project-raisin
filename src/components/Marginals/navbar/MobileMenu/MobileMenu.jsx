import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import {
  ResItem,
  ResList,
  ResMen,
  HamburgerRegisterButton,
} from '@/components/Marginals/navbar/navbar.styles';
import { ButtonData, navLinks } from '@/config/content/NavbarData/NavData';

function MobileMenu({ isOpen, handleToggle, handleProfileToggle, isLoggedIn }) {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backdropFilter: 'blur(50px)',
            borderRadius: '20px',
            marginTop: '10px',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
          className='h-[73vh] flex items-center justify-center'
        >
          <ResMen>
            <ResList>
              {navLinks.map((navLink, idx) => (
                <ResItem key={navLink.link}>
                  <Link href={`${navLink.link}`} onClick={handleToggle}>
                    {navLink.name}
                  </Link>
                </ResItem>
              ))}

              {isLoggedIn ? (
                <HamburgerRegisterButton onClick={handleProfileToggle}>
                  Profile
                </HamburgerRegisterButton>
              ) : (
                <HamburgerRegisterButton>
                  <Link href='/register' onClick={handleToggle}>
                    {ButtonData.title}
                  </Link>
                </HamburgerRegisterButton>
              )}
            </ResList>
          </ResMen>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
