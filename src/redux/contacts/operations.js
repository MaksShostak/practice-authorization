import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../operations';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);
      // return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
