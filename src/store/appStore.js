import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    step: 0,
    isTraining: false,
    result: 0,
    sqft: 1450,
    bedrooms: 2,
    bathrooms: 2,
    isBrick: false,
    neighborhood: "East",
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setTraining: (state, action) => {
      state.isTraining = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setSqft: (state, action) => {
      state.sqft = action.payload;
    },
    setBedrooms: (state, action) => {
      state.bedrooms = action.payload;
    },
    setBathrooms: (state, action) => {
      state.bathrooms = action.payload;
    },
    setIsBrick: (state, action) => {
      state.isBrick = action.payload;
    },
    setNeighborhood: (state, action) => {
      state.neighborhood = action.payload;
    },
  },
});

export const {
  setStep,
  setTraining,
  setResult,
  setSqft,
  setBedrooms,
  setBathrooms,
  setIsBrick,
  setNeighborhood,
} = appSlice.actions;

export default appSlice.reducer;
