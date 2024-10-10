'use client';
import { Footer } from '../Footer/Footer';
import Navbar from '../Marginals/navbar/navbar';
function Hoc({ children }) {
  return (
    <>
      <Navbar />
      <div className='pt-20'>{children}</div>
      <Footer />
    </>
  );
}

export default Hoc;
