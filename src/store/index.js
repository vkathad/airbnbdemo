import { createSlice, configureStore } from "@reduxjs/toolkit";

import bootModal from "./modal";

const store = configureStore({
  reducer: { Bmodal: bootModal },
});

//const store = createStore(authReducer);

export default store;
