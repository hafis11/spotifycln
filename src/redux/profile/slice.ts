import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

const slice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
});

export const { name, reducer, actions, getInitialState } = slice;
