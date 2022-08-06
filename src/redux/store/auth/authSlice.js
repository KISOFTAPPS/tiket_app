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
    },
});

export const { onLoading } = authSlice.actions;
