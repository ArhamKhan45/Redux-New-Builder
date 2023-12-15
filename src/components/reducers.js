import { createReducer } from "@reduxjs/toolkit";

const initialState1 = {
  counter: 0,
};
export const customReducer = createReducer(initialState1, (builder) => {
  builder
    .addCase("increment", (state, action) => {
      state.counter++;
    })
    .addCase("decrement", (state, action) => {
      --state.counter;
    })
    .addCase("reset", (state, action) => {
      state.counter = action.payload;
    });
});

const initialState2 = {
  adder: 0,
};

export const customAdderReducer = createReducer(initialState2, (builder) => {
  builder.addCase("setAdder", (state, action) => {
    state.adder = action.payload;
  });
});
