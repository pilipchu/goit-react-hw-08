import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { notify } from "../auth/operations";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { ...user });
      notify();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      notify();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  "contacts/changeContact",
  async ({ values, id }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, {
        name: values.name,
        number: values.number,
      });
      notify();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const openWindow = createAction("contacts/openWindow", (data, id) => {
  return {
    payload: {
      data,
      id,
    },
  };
});

export const closeWindow = createAction("contacts/closeWindow", (data) => {
  return { payload: data };
});
