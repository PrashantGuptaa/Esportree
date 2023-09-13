import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  bottomBorderNumber:0,
  light:true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    turnOffLeftMenu: (state) => {
      state.open = false;
    },
    changeLeftMenu: (state) => {
      state.open = !state.open
    },
    changeMenuBottomBorder:(state,action)=>{
      state.bottomBorderNumber=action.payload
    },
    changeMode:(state)=>{
      state.light = !state.light
    },
    changeDefault:(state)=>{
      state.light= true
    }
  },
});
export const { turnOffLeftMenu, changeLeftMenu,changeMenuBottomBorder,changeMode ,changeDefault} = counterSlice.actions;
export default counterSlice.reducer;
