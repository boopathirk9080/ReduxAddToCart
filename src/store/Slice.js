import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
            const itemId = action.payload
            let newProducts = state.filter(cartProduct => cartProduct.id !== itemId)
            return newProducts
        }
    }
})
export default cartSlice.reducer
export const { addItem, removeItem } = cartSlice.actions