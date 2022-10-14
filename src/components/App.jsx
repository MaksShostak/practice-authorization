import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/operations';
import Router from './Router/Router';

export const App = () => {
  const { token } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) dispatch(currentUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Router />
    </div>
  );
};
