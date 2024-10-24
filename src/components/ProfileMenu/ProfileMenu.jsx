'use client';
import Link from 'next/link';
import { useUserDetails } from '@/hooks/useUserDetails';
import { AuthContext } from '@/context/auth-context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

function ProfileMenu({ handleProfileToggle }) {
  const { handleSignOut } = useContext(AuthContext);
  const getUserDetails = useUserDetails();
  const user = getUserDetails();

  const handleLogout = () => {
    handleSignOut();
    handleProfileToggle();
  };

  return (
    <div className='h-[80dvh] grid place-items-center w-full'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, backdropFilter: 'blur(20px)', y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
        key={'profile-menu'}
        className='min-w-[16rem] w-full max-w-96 p-8 rounded-lg shadow-lg  bg-black/30 border border-white/20'
      >
        <div className='flex flex-col items-center'>
          <button
            onClick={handleProfileToggle}
            className='absolute top-2 right-5 text-red-500 cursor-pointer font-orbitron text-xl hover:scale-110 transition-all duration-200'
          >
            X
          </button>
          <h2 className='text-xl font-semibold font-orbitron text-white'>{user?.name}</h2>
          <p className='text-sm text-gray-300 font-orbitron'>{user?.email}</p>

          <div className='flex flex-col gap-5 items-center justify-center mt-5 font-prompt w-full'>
            <Link
              href='/register'
              onClick={handleProfileToggle}
              className='hover:underline underline-offset-4 my-5'
            >
              Complete Your Registration
            </Link>
            <button
              onClick={handleLogout}
              className='bg-black/30 p-2 backdrop-blur-lg hover:bg-black duration-500 w-full'
            >
              Logout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProfileMenu;
