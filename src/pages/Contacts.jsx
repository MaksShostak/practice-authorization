import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getContacts());
    }
  }, [dispatch, token]);

  return <div>Contacts</div>;
};

export default Contacts;
