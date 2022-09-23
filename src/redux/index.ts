import { configureStore } from "@reduxjs/toolkit";
import { reducer as profileReducer } from "./profile/slice";

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
});
