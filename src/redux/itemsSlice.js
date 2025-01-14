import { createSlice } from "@reduxjs/toolkit";


export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        selectedCategory: 'HOODIE'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})


export const getSelectedCategory = state => state.items.selectedCategory;
export const { filterCategory } = itemsSlice.actions;
export default itemsSlice.reducer;
