import { configureStore } from '@reduxjs/toolkit';
import houseReducer from './features/houseSlice'

export default configureStore({
    reducer: {
        house: houseReducer
    }
})