import {configureStore} from "@reduxjs/toolkit";

import testReducer from "./reducers/testReducer";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
})

