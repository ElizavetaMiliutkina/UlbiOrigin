import { createSlice } from '@reduxjs/toolkit';
import { loginByUserName } from '../../services/loginByUserName/loginByUserName';
var initialState = {
    isLoading: false,
    username: '',
    password: '',
};
export var loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUsername: function (state, action) {
            state.username = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(loginByUserName.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(loginByUserName.fulfilled, function (state, action) {
            state.isLoading = false;
        })
            .addCase(loginByUserName.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var loginActions = loginSlice.actions;
export var loginReducer = loginSlice.reducer;
