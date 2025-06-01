import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/auth/authSlice';
import usersReducer from '../slices/allUsers/getuserSlice';
import deleteReducer from '../slices/deleteUser/deleteUser';

export const store = configureStore({
    reducer: {
       user: authReducer,
       allUsers: usersReducer,
       deleteUser: deleteReducer,
    }
})


