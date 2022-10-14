import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const forAxiosToken = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk('register', async (user, thunkApi) => {
  try {
    const { data } = await axios.post('/users/signup', user);
    forAxiosToken.set(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const currentUser = createAsyncThunk(
  'currentUser',
  async (_, thunkApi) => {
    // thunkApi.getState().token;
    try {
      forAxiosToken.set(thunkApi.getState().token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    forAxiosToken.unset();
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const signin = createAsyncThunk('signin', async (user, thunkApi) => {
  try {
    const { data } = await axios.post('/users/login', user);
    forAxiosToken.set(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
