import { configureStore } from '@reduxjs/toolkit';import thunk from 'redux-thunk';
import { rootReducer } from "../reducers/rootReducer";



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});