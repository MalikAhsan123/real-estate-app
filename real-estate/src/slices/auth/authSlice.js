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
        token: localStorage.getItem("token") || "",
        user: localStorage.getItem("userDetail") ? JSON.parse(localStorage.getItem("userDetail")) : null,
        success: localStorage.getItem("success") ? true : false,
        error: "",
        login: false,
        isLoggedIn: localStorage.getItem("token") ? true : false, // this means "true" if token exists
     },
    reducers: {
        logout: (state) => {
          state.user = null;
          state.success = false;
          state.token = "";
          state.isLoggedIn = false;
          localStorage.removeItem("token");
          localStorage.removeItem("success");
          localStorage.removeItem("userDetail");
        },
      },
    extraReducers: (builder) => {
       
        builder.addCase(formSubmit.fulfilled, (state, action) => {
            state.success = action.payload.success;
            state.user = action.payload.data;
            state.login = action.payload.login;
            state.isLoggedIn = true;
            if (action.payload.success) {
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
export const { logout } = authSlice.actions;
export default authSlice.reducer;