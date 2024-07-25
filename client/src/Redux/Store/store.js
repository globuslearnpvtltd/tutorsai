import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slices/authSlice.js';

const store = configureStore({
    reducer: {
        learnerAuth : authReducer
    }
})

export default store