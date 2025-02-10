import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slices/dataSlice';

const store = configureStore({
    reducer: {
        data: dataReducer, // Редуктор для данных
    },
});

export default store;