import { addproperty, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('addproperty', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/api/properties/addproperty');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || { message: "Unknown error" });
    }
});