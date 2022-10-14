import React from 'react';
import Navigator from 'components/Navigator/Navigator';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <header>
        <Navigator />
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
