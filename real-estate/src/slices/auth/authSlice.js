import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const formSubmit = createAsyncThunk("formSubmit", async ({credential, isLogin}) => {
    const response = await axios.post(`http://localhost:3000/api/auth/${isLogin ? 'login' : 'createuser'}`, credential);
    const data = response.data
    console.log('data', data);
    return data;

})

const authSlice = createSlice({
    name: "user",

    initialState: {
       msg: "",
       token: "",
       user: null,
       success: false,
       error: "",
       login: false
    },

    extraReducers: (builder) => {
       
        builder.addCase(formSubmit.fulfilled, (state, action) => {
            state.success = action.payload.success;
            state.user = action.payload.data;
            state.login = action.payload.login;
            if(state.login == false){
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('success', action.payload.success);
                localStorage.setItem('userDetail', JSON.stringify(action.payload.user));
            }
            
        })
        .addCase(formSubmit.rejected, (state, action) => {
            state.error = action.payload.error;
        })
    }
})

export default authSlice.reducer;