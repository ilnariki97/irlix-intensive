import {configureStore} from "@reduxjs/toolkit";
import {filtersReducer} from './reducers/filters.slice';
import {mockApi} from "../services/mockService";

export const setupStore = () => {
    return configureStore({
        reducer: {
            filtersReducer,
            [mockApi.reducerPath]: mockApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(mockApi.middleware)
    })
}
