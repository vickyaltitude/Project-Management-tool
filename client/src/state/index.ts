import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkmode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarkmode: false,
};

const globalSlice = createSlice({
  name: "globale",
  initialState,
  reducers: {
    setSideBarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkmode = action.payload;
    },
  },
});

export const { setSideBarCollapsed, setDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
