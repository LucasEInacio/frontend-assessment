import { Iterable } from 'immutable'
import {
    configureStore,
    createSerializableStateInvariantMiddleware,
    isPlain
} from '@reduxjs/toolkit';
import houseReducer from './features/houseSlice'

const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)

const getEntries = (value) =>
    Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable,
    getEntries,
})

export default configureStore({
    reducer: {
        house: houseReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                isSerializable: serializableMiddleware
            }
        })
})