import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {
    rake: {
      x: 81,
      y: 70,
      id: "1",
      found: false,
    },
    sunglasses: {
      x: 77,
      y: 82,
      id: "2",
      found: false,
    },
    ball: {
      x: 33,
      y: 64,
      id: "3",
      found: false,
    },
    mask: {
      x: 89,
      y: 61,
      id: "4",
      found: false,
    },
    startfish: {
      x: 21,
      y: 55,
      id: "5",
      found: false,
    },
    beachbag: {
      x: 97,
      y: 49,
      id: "6",
      found: false,
    },
    bucket: {
      x: 71,
      y: 69,
      id: "7",
      found: false,
    },
    kite: {
      x: 60,
      y: 37,
      id: "8",
      found: false,
    },
    hat: {
      x: 73,
      y: 49,
      id: "9",
      found: false,
    },
    icecream: {
      x: 44,
      y: 37,
      id: "10",
      found: false,
    },
  },
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setFound(state, action) {
      const key = action.payload;
      state.items[key].found = true;
    },
  },
});

export const imageActions = imageSlice.actions;
export default imageSlice.reducer;
