import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        toggleCart: (state, action) => {
            if (state.cart.some((cartItem) => cartItem.id === action.payload.id)) {
                return {
                    ...state,
                    cart: state.cart.map((cartItem) => cartItem.id === action.payload.id ? { ...action.payload, amount: cartItem.amount + action.payload.amount } : cartItem)
                }
            }
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => ({
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
        }),
        clearCart: () => ({ cart: [] })
    }
})

export const { toggleCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer