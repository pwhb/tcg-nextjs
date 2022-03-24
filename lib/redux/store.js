import { configureStore } from '@reduxjs/toolkit'
import cardReducer from "./cardSlice"
import cartReducer from "./cartSlice"


export default configureStore({
    reducer: {
        cards: cardReducer,
        cart: cartReducer,

    },
})