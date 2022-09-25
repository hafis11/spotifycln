import { configureStore } from "@reduxjs/toolkit";
import { reducer as profileReducer } from "./slice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      profile: profileReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
