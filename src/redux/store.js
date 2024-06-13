import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../redux/contacts/slice";
import authReducer from "../redux/auth/slice";
import { filterReducer } from "../redux/filters/slice";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: authReducer,
  },
});
