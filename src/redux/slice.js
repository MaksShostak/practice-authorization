import { createSlice } from '@reduxjs/toolkit';
import { register, currentUser, logout, signin } from './operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [signin.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [currentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLogin = true;
    },
    [logout.fulfilled]() {
      return initialState;
    },
  },
});

export default authSlice.reducer;
