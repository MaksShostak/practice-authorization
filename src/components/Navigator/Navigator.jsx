import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/operations';

const Navigator = () => {
  const { isLogin } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      {isLogin ? (
        <>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <Button
            type="button"
            onClick={() => {
              dispatch(logout());
            }}
          >
            logout
          </Button>
        </>
      ) : (
        <>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </div>
  );
};

export default Navigator;
