import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice( {
    name: 'auth',
    initialState:{
        status: "checking", //"auth", "not-auth",
        user:{}, //info del usuario
        errorMessage: undefined
    },

    //objetivo de los reducers es generar un nuevo state
    reducers: {
        onChecking: (state) => {
            state.status= "checking";//"auth", "not-auth",
            state.user={};//info del usuario
            state.errorMessage= undefined;
        },
        onLogin: (state, { payload }) => {
            state.status= "auth";//"auth", "not-auth",
            state.user=payload;//info del usuario
            state.errorMessage= undefined;
        },
        onLogout: (state, { payload }) => {
            state.status= "non-auth";//"auth", "not-auth",
            state.user={};
            state.errorMessage= payload;
        },
        clearErrorMessage: (state, { payload})=>{
            state.errorMessage= undefined;
        }
    },
});


export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;