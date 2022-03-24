import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, toggleCart, removeFromCart } from "../redux/cartSlice"
import { toggleTotal } from "../redux/cardSlice"

function useCart() {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [successOpen, setSuccessOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const updateCart = ({ card, amount }) => {
        dispatch(toggleTotal({ id: card.id, amount: -amount }))
        dispatch(toggleCart({ ...card, set: { ...card.set, total: card.set.total - amount }, amount: amount }))
    }

    const deleteCartItem = (id) => {
        dispatch(toggleTotal({ id, amount: 1 }))
        dispatch(removeFromCart(id))
    }

    const resetCart = () => {
        for (let item of cart) {
            dispatch(toggleTotal({ ...item }));
        }
        dispatch(clearCart());
        setCartOpen(false)
    };

    const totalCards = cart.reduce((prevVal, curVal) => prevVal + curVal.amount, 0)

    const totalPrice = cart.reduce((prevVal, curVal) => prevVal + curVal.amount * curVal.cardmarket.prices.averageSellPrice, 0).toFixed(2)

    const payNow = () => {
        dispatch(clearCart())
        setCartOpen(false)
        setSuccessOpen(true)
    }

    useEffect(() => {
        if (cart.length === 0) {
            setCartOpen(false)
        }
    }, [cart])
    return {
        totalCards,
        totalPrice,
        payNow,
        resetCart,
        successOpen,
        setSuccessOpen,
        cartOpen,
        setCartOpen,
        updateCart,
        deleteCartItem

    }
}

export default useCart