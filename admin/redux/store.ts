import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export { store, persistor };
