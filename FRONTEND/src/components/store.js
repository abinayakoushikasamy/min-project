import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./UserSlice.js";

const persistConfig = {
  key: "root", // the key for the root state in local storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer, // use the persisted reducer
  },
});

const persistor = persistStore(store); // create a persistor object to persist the store

export { store, persistor };
