import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addTocart(state, action) {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
            // console.log("Added to cart", action.payload)
        }
    }
})

export default shoppingCartSlice.reducer;
export const { addTocart } = shoppingCartSlice.actions;
