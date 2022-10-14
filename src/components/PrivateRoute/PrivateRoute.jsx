import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirect = '/' }) => {
  const { isLogin } = useSelector(state => state);

  return isLogin ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
