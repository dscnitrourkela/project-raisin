import { navigate } from 'gatsby';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../utils/Auth';

const PrivateRoute = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    // TODO: Add loading spinner
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    toast.error('You are not authenticated. Please login to access this page.');
    navigate('/');
    return null;
  }

  return children;
};

export default PrivateRoute;
