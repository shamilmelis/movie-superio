import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [], // Здесь будут храниться ваши данные
        loading: false, // Для состояния загрузки
        error: null, // Для обработки ошибок
    },
    reducers: {

    },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;