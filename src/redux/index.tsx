import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";
const reducers = combineReducers({
  LoginReducer,
});

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  whitelist: ["LoginReducer"],
  timeout: 0,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
