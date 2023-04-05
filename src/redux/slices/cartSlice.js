import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   totalPrice: 0,
   items: []
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItems(state, action) {
         const findItem = state.items.find((obj) => obj.id === action.payload.id && obj.types === action.payload.types && obj.sizes === action.payload.sizes)
         console.log('action.payload.id', action)

         if (findItem) {
            findItem.count++
         } else {
            state.items.push({
               ...action.payload,
               count: 1
            })
         }
         state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.count) + sum
         }, 0)
      },

      plusItem(state, action) {
         const findItem = state.items.find((obj) => obj.id === action.payload)
         if (findItem) {
            findItem.count++
         }
         state.totalPrice = state.totalPrice + findItem.price
      },

      minusItem(state, action) {
         const findItem = state.items.find((obj) => obj.id === action.payload)
         if (findItem) {
            findItem.count--
         }
         state.totalPrice = state.totalPrice - findItem.price
      },
      removeItems(state, action) {
         state.items = state.items.filter(obj => obj.id !== action.payload)
      },
      clearItems(state, action) {
         state.items = []
         state.totalPrice = 0
      },
   }
})


export const { addItems, removeItems, clearItems, minusItem, plusItem } = cartSlice.actions;

export default cartSlice.reducer