import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../reducers/filterSlice";

export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
