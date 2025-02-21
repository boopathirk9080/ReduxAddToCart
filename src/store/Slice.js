import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if  exists product
            } else
                state.push({ ...action.payload, quantity: 1 })
        },
        removeItem(state, action) {
            const itemId = action.payload
            let newProducts = state.filter(cartProduct => cartProduct.id !== itemId)
            return newProducts
        },
        incrementQuantity(state, action) {
            const item = state.find(item => item.id === action.payload)
            if (item) {

                item.quantity += 1

            }

        },
        decrementQuantity(state, action) {
            const item = state.find(item => item.id === action.payload)
            if (item) {

                item.quantity -= 1

            }

        }, removeAll() {
            return []
        }
    }
})
export default cartSlice.reducer
export const { addItem, removeItem, incrementQuantity, decrementQuantity, removeAll } = cartSlice.actions