'use client';
import { AuthProvider } from '@/context/auth-context';
import { Footer } from '../../Marginals/Footer/Footer';
import Navbar from '../../Marginals/navbar/navbar';
import SEO from '@/components/SEO/SEO';

function Hoc({ children }) {
  return (
    <AuthProvider>
      <SEO
        title='INNOVISION 2024 | NIT ROURKELA'
        description='Join us for the biggest college event of the year! Featuring workshops, competitions, and networking opportunities.'
        ogImage='https://innonitrkl.in/'
        ogUrl='https://innonitrkl.in/'
      />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </AuthProvider>
  );
}

export default Hoc;
