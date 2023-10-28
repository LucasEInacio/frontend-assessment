import { createSlice } from '@reduxjs/toolkit'

export const houseSlice = createSlice({
    name: 'house',
    initialState: {
        houses: []
    },
    reducers: {
        setHouses: (state, action) => {
            state.houses = action.payload || [];
        }
    },
})

export const { setHouses } = houseSlice.actions

export default houseSlice.reducer