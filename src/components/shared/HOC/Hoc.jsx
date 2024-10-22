'use client';
import { AuthProvider } from '@/context/auth-context';
import { Footer } from '../../Marginals/Footer/Footer';
import Navbar from '../../Marginals/navbar/navbar';

function Hoc({ children }) {
  return (
    <AuthProvider>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </AuthProvider>
  );
}

export default Hoc;
