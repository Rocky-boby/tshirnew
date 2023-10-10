import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/Cartslice';
import { saveStateToCookie, loadStateFromCookie } from './cookieStorage';

// Load the state from the cookie
const persistedState = loadStateFromCookie();

export const store = configureStore({
  reducer: {
    allcart: cartReducer,
  },
  preloadedState: persistedState, // Initialize with persisted state
});

// Subscribe to store changes and save the state to the cookie whenever it changes
store.subscribe(() => {
  saveStateToCookie(store.getState());
});
