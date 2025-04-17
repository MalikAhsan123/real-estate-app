import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const formSubmit = createAsyncThunk("formSubmit", async ({credential, isLogin}, { rejectWithValue }) => {
   try {
     const response = await axios.post(`http://localhost:3000/api/auth/${isLogin ? 'login' : 'createuser'}`, credential);
     const data = response.data
     console.log('data', data);
     return data;
   } catch (error) {
    return rejectWithValue(error.response.data);
   }
})

const authSlice = createSlice({
    name: "user",

    initialState: {
        msg: "",
        token: localStorage.getItem("token") || "",
        user: localStorage.getItem("userDetail") ? JSON.parse(localStorage.getItem("userDetail")) : null,
        success: localStorage.getItem("success") ? true : false,
        error: false,
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
        clearAuthState: (state) => {
            state.error = false;
            state.msg = "";
            state.success = false;
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
            // console.log('error', action.payload.error)
            state.error = action.payload.isError;
            state.msg = action.payload.errorMsg;
            
        })
    }
})
export const { logout, clearAuthState } = authSlice.actions;
export default authSlice.reducer;