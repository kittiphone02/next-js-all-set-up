import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ILayoutState {
  showLoading: boolean;
  loadingMsg: string;
  isOpen: boolean;
  isSwitch: boolean;

}
// Define the initial state using that type
const initialState: ILayoutState = {
  showLoading: false,
  loadingMsg: "Loading...",
  isOpen: true,
  isSwitch: false,
};


export const layoutSlice = createSlice({
  name: "layout",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showLoading: (state, action: PayloadAction<string | undefined>) => {
      state.showLoading = true;
      state.loadingMsg = action.payload || "Loading...";
    },
    hideLoading: (state) => {
      state.showLoading = false;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleSwitch: (state) =>{
      state.isSwitch = false
    }
  },
});

export const { showLoading, hideLoading,toggleSidebar,toggleSwitch } = layoutSlice.actions;

export default layoutSlice.reducer;
