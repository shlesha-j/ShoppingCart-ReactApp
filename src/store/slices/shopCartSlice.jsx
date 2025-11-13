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
            console.log("Added to cart", action.payload)
        },
        deleteFromcart(state, action) {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload
            );
        },
        increaseQuantity(state, action) {
            const item = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const item = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload
            );

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(
                        (cartItem) => cartItem.id !== action.payload
                    );
                }
            }
        }
    }
})

export default shoppingCartSlice.reducer;
export const { addTocart, deleteFromcart, increaseQuantity, decreaseQuantity } = shoppingCartSlice.actions;
