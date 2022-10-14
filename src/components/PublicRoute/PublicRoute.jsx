import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  children,
  restricted = false,
  redirect = '/',
}) => {
  const { isLogin } = useSelector(state => state);

  return isLogin && restricted ? <Navigate to={redirect} /> : children;
};
