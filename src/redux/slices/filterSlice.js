import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   categoryId: 0,
   sort: {
      name: 'Популярность',
      sortProperty: 'rating'
   },
};

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategoryId(state, action) {
         state.categoryId = action.payload;
      },
      setSort(state, action) {
         state.sort = action.payload
      }
   }
})


export const { setCategoryId, setSort, sort } = filterSlice.actions;

export default filterSlice.reducer