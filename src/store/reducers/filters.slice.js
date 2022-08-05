import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filters: {
        sortByCategory: 'все'
    }
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterCategory: (state, action) => {
            state.filters.sortByCategory = action.payload
        }
    }
})
export const { setFilterCategory } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
