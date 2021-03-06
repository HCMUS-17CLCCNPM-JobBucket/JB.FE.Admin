import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user";
import filterReducer from "./filter";
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
  filter: filterReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

let persistor = persistStore(store);

export { store, persistor };
