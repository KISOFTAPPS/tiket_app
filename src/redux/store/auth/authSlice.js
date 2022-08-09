import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: true,
        isAuthenticated: false,
        user: {},
    },
    reducers: {
        onLoading: (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
            state.user = {};
        },
        onLogin: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        onLogout: (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = {};
        }
    },
});

export const { onLoading,onLogin,onLogout } = authSlice.actions;
