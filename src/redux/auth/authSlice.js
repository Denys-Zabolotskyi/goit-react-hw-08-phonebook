import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperations';

const InitialAuthState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth/register',
  initialState: InitialAuthState,

  extraReducers: builder => {
    builder
      ////////////register///////////////////
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
        // state.error = null;
        // state.items = action.payload;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      ////////////logIn///////////////////
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
        // state.error = null;
        // state.items = action.payload;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      ////////////logOut///////////////////

      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        // const { user, token } = payload;
        state.isLoading = false;
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        // state.error = null;
        // state.items = action.payload;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
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
