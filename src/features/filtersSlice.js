import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: "filters",
    initialState: {"selectedDate": "", "selectedFilter": ""},
    reducers: {
        setDate: (state, action) => {
            state.selectedDate = action.payload;
        },
        setFilter: (state, action) => {
            state.selectedFilter = action.payload;
        },
    }
});

export const selectDate = state => state.filters.selectedDate;
export const selectFilter = state => state.filters.selectedFilter;

export const { setDate, setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;