import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
   const { categoryId, sortType } = params
   const { data } = await axios.get(`https://63e7a4f1bb28627977157a40.mockapi.io/items${categoryId > 0 ? '?category=' + categoryId : '?'}&sortBy=${sortType}&order=asc`);
   return data;
})


const initialState = {
   items: [],
   status: 'loading',
};

const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setItems(state, action) {
         state.items = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.items = [];
         })
         .addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
         })
         .addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error';
            state.items = [];
         });
   }
})


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer