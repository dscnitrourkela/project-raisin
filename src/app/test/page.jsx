'use client';
import { useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
function Page() {
  const { userInfo, handleGoogleSignIn } = useContext(AuthContext);
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login in</button>
    </div>
  );
}

export default Page;
