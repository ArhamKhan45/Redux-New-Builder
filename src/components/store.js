import { configureStore } from "@reduxjs/toolkit";
import { customReducer, customAdderReducer } from "./reducers";

const store = configureStore({
  reducer: {
    counter: customReducer,
    adder: customAdderReducer,
  },
});

export default store;
