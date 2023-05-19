import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  isShow: false,
  headerMenu: false,
};

const modalSlice = createSlice({
  name: "tailwindmodal",
  initialState: initialModalState,
  reducers: {
    showModal(state, action) {
      state.isShow = true;
    },
    hideModal(state) {
      state.isShow = false;
    },
    showHeader(state, action) {
      state.headerMenu = true;
    },
    hideHeader(state) {
      state.headerMenu = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
