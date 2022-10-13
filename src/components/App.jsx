import { useEffect } from 'react';
import AuthForm from './AuthForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logout } from 'redux/operations';
import Button from 'react-bootstrap/Button';

export const App = () => {
  const dispatch = useDispatch();
  const { isLogin, token } = useSelector(state => state);

  useEffect(() => {
    if (token) dispatch(currentUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {isLogin ? (
        <Button
          type="button"
          onClick={() => {
            dispatch(logout());
          }}
        >
          logout
        </Button>
      ) : (
        <AuthForm />
      )}
    </div>
  );
};
