'use client';
import { useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
import { PrimaryButton } from '@/components/shared/Typography/Buttons';
function Page() {
  const { handleSignOut } = useContext(AuthContext);
  return (
    <div className='bg-black text-white min-h-screen grid place-items-center'>
      <PrimaryButton onClick={handleSignOut}>Log out</PrimaryButton>
    </div>
  );
}

export default Page;
