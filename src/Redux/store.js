import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slices/dataSlice';
import userReducer from './Slices/userSlices'

const store = configureStore({
    reducer: {
        data: dataReducer, // Редуктор для данных
        user: userReducer,
    },
});


export default store;