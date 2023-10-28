import { createSlice } from '@reduxjs/toolkit'

export const houseSlice = createSlice({
    name: 'house',
    initialState: {
        houses: []
    },
    reducers: {
        fetchHouses: (state, action) => {
            fetch('/cdn.number8.com/LA/listings.json')
                .then((response) => response.json())
                .then((response) => {
                    if (action.payload.callback)
                        action.payload.callback(response);
                })
                .catch((error) => {
                    if (action.payload.catch)
                        action.payload.catch(error);
                });
        },
        setHouses: (state, action) => {
            state.houses = action.payload || [];
        }
    }
})

export const { setHouses, fetchHouses } = houseSlice.actions

export default houseSlice.reducer