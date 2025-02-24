import { createSlice } from "@reduxjs/toolkit";
const dateFromWeb = JSON.parse(localStorage.getItem('cart'))
const cartSlice = createSlice({
    name: 'cart',
    initialState: dateFromWeb,
    reducers: {
        addItem(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else
                state.push({ ...action.payload, quantity: 1 })
            localStorage.setItem("cart", JSON.stringify([...state]))
        },
        removeItem(state, action) {
            const itemId = action.payload
            let newProducts = state.filter(cartProduct => cartProduct.id !== itemId)
            localStorage.setItem("cart", JSON.stringify([...newProducts]))

            return newProducts
        },
        incrementQuantity(state, action) {
            const item = state.find(item => item.id === action.payload)

            if (item) {

                item.quantity += 1
                localStorage.setItem("cart", JSON.stringify(state));
            }

        },
        decrementQuantity(state, action) {
            const item = state.find(item => item.id === action.payload)
            if (item) {

                item.quantity -= 1
                localStorage.setItem("cart", JSON.stringify(state));

            }

        }, removeAll() {
            localStorage.setItem("cart", JSON.stringify([]));
            return []
        }
    }
})
export default cartSlice.reducer
export const { addItem, removeItem, incrementQuantity, decrementQuantity, removeAll } = cartSlice.actions