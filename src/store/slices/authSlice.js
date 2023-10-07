import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
  token: "",
  displayName: "User",
  photoURL: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    setNameAndPhotoUrl: (state, action) => {
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    removeUser: (state) => {
      state.email = "";
      state.id = "";
      state.token = "";
      state.displayName = "User";
      state.photoURL = "";
    },
    setPhotoUrl: (state, action) => {
      state.photoURL = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser, setNameAndPhotoUrl, setPhotoUrl } =
  authSlice.actions;

export default authSlice.reducer;
