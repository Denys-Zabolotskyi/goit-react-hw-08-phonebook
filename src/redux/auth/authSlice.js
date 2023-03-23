import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const InitialAuthState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
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
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
