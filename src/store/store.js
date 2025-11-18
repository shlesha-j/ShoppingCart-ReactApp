import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from './slices/shopCartSlice'


const store = configureStore({
    reducer:{
        cart: shoppingCartSlice  
    }
})

export default store