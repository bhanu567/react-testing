import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isLoggedIn: false,
  idToken: null,
  photoURL: null,
  fullName: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload !== "null" ? true : false;
      state.idToken = action.payload;
      localStorage.setItem("idToken", action.payload);
    },

    logout(state, action) {
      state.isLoggedIn = false;
      state.idToken = null;
      localStorage.removeItem("idToken");
    },

    updateData(state, action) {
      state.photoURL = action.payload.photoURL;
      state.fullName = action.payload.fullName;
      localStorage.setItem(state.idToken, JSON.stringify(action.payload));
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
