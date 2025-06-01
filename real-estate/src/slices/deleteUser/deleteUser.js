import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUser  = createAsyncThunk('deleteUser', async (id , _,thunkAPI) => {
    try {
        console.log('id',id)
        const response = await axios.delete(`http://localhost:3000/api/auth/deleteuser/${id}`);
        return response.data;
    } catch (error) {
         return thunkAPI.rejectWithValue(error.response?.data || { message: "Unknown error" });
    }
})

const deleteSlice = createSlice({
    name: "deleteUser",
    initialState: {
        msg: ""
    },

    extraReducers : (builder) => {
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.msg = action.payload.message
        })
        .addCase(deleteUser.rejected, (state, action) => {
                    console.log("Error in deleting usert:", action.error.message || action.payload);
                })
    }
})

export default deleteSlice.reducer;