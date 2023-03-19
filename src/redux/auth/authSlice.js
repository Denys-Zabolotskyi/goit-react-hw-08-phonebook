import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const InitialAuthState = {
  user: {},
  token: null,
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth/register',
  initialState: InitialAuthState,

  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
        // state.error = null;
        // state.items = action.payload;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    //   .addCase(addContact.pending, state => {
    //     state.isLoading = true;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
    //   .addCase(deleteContact.pending, state => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const index = state.items.findIndex(item => item.id === action.payload);
    //     state.items.splice(index, 1);
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const authReducer = authSlice.reducer;
