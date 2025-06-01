// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const formSubmit = createAsyncThunk("formSubmit", async ({credential, isLogin}, { rejectWithValue }) => {
//    try {
//      const response = await axios.post(`http://localhost:3000/api/auth/${isLogin ? 'login' : 'createuser'}`, credential);
//      const data = response.data
//      console.log('data', data);
//      return data;
//    } catch (error) {
//     return rejectWithValue(error.response.data);
//    }
// })

// const authSlice = createSlice({
//     name: "user",

//     initialState: {
//         msg: "",
//         token: localStorage.getItem("token") || "",
//         user: localStorage.getItem("userDetail") ? JSON.parse(localStorage.getItem("userDetail")) : null,
//         success: localStorage.getItem("success") ? true : false,
//         error: false,
//         login: false,
//         isLoggedIn: localStorage.getItem("token") ? true : false, // this means "true" if token exists
//      },
//     reducers: {
//         logout: (state) => {
//           state.user = null;
//           state.success = false;
//           state.token = "";
//           state.isLoggedIn = false;
//           localStorage.removeItem("token");
//           localStorage.removeItem("success");
//           localStorage.removeItem("userDetail");
//         },
//         clearAuthState: (state) => {
//             state.error = false;
//             state.msg = "";
//             state.success = false;
//           },
//       },
//     extraReducers: (builder) => {

//         builder.addCase(formSubmit.fulfilled, (state, action) => {

//             state.user = action.payload.user;
//             state.login = action.payload.login;
//             console.log("actionLogin", action.payload.login)
//             state.success = action.payload.success;

//             if (action.payload.success && action.payload.login) {
//                 state.isLoggedIn = true;
//                 console.log("Ahsan")
//                 localStorage.setItem('token', action.payload.token);
//                 localStorage.setItem('success', action.payload.success);
//                 localStorage.setItem('userDetail', JSON.stringify(action.payload.user));
//             }

//         })
//         .addCase(formSubmit.rejected, (state, action) => {
//             // console.log('error', action.payload.error)
//             state.error = action.payload.isError;
//             state.msg = action.payload.errorMsg;

//         })
//     }
// })
// export const { logout, clearAuthState } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
// import { getUsers } from "../allUsers/getuserSlice";


export const formSubmit = createAsyncThunk(
  "formSubmit",
  async ({ credential, isLogin, isAdmin }, { rejectWithValue }) => {
    try {
      let url = "";

      if (isAdmin) {
        url = "http://localhost:3000/api/auth/adminlogin";
      } else if (isLogin) {
        url = "http://localhost:3000/api/auth/login";
      } else {
        url = "http://localhost:3000/api/auth/createuser";
      }

      const response = await axios.post(url, credential);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const authSlice = createSlice({
  name: "user",
  initialState: {
    msg: "",
    token: Cookies.get("token") || "",
    user: Cookies.get("userDetail")
      ? JSON.parse(Cookies.get("userDetail"))
      : null,
    success: Cookies.get("success") ? true : false,
    error: false,
    login: false,
    refresh: false,
    isLoggedIn: Cookies.get("token") ? true : false,
    admin: false,
    adminToken:  Cookies.get("adminToken") || "",
    adminDetail: Cookies.get("adminDetail")
    ? JSON.parse(Cookies.get("adminDetail"))
    : null,


  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.success = false;
      state.token = "";
      state.isLoggedIn = false;
      Cookies.remove("token");
      Cookies.remove("success");
      Cookies.remove("userDetail");
    },
    clearAuthState: (state) => {
      state.error = false;
      state.msg = "";
      state.success = false;
    },
    refreshComponent: (state) => {
      state.refresh = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(formSubmit.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.login = action.payload.login;
        state.success = action.payload.success;

        if (action.payload.success){
          if (action.payload.login) {
            state.isLoggedIn = true;
            Cookies.set("token", action.payload.token);
            Cookies.set("success", action.payload.success);
            Cookies.set("userDetail", JSON.stringify(action.payload.user));
          }
          else if(action.payload.admin){
            Cookies.set("adminToken", action.payload.token);
            Cookies.set("success", action.payload.success);
            Cookies.set("adminDetail", JSON.stringify(action.payload.user));
          }
          // if (!action.payload.login && !action.payload.admin) {
          //   // Extra dispatch hook needed
          //   setTimeout(() => {
          //     window.dispatch(getUsers()); // we'll define `window.dispatch`
          //   }, 0);
          // }
        }
      })
      .addCase(formSubmit.rejected, (state, action) => {
        state.error = action.payload.isError;
        state.msg = action.payload.errorMsg;
      });
  },
});

export const { logout, clearAuthState, refreshComponent } = authSlice.actions;
export default authSlice.reducer;
