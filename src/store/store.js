import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from './slices/shopCartSlice'


const store = configureStore({
    reducer:{
        cart: shoppingCartSlice  //slice name
    }
})

export default store