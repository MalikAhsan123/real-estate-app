import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('getUsers', async (_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:3000/api/auth/getusers');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || { message: "Unknown error" });
    }
});


const usersSlice = createSlice({
    name: "allUsers",
    initialState: {
        users: [],
        usersChanged: false,
      },
   
    extraReducers : (builder) => {
        builder.addCase(getUsers.fulfilled, (state , action) => {
            state.users = action.payload;
            
            console.log("allusers", state.users.length);
        })
        .addCase(getUsers.rejected, (state, action) => {
            console.log("Error fetching users:", action.error.message || action.payload);
        })
    }

})


export default usersSlice.reducer;