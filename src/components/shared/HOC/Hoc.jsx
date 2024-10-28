'use client';
import { AuthProvider } from '@/context/auth-context';
import { Footer } from '../../Marginals/Footer/Footer';
import Navbar from '../../Marginals/navbar/navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';

function Hoc({ children }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default Hoc;
