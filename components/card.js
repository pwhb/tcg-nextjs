import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTotal } from "../lib/redux/cardSlice"
import { toggleCart, removeFromCart } from "../lib/redux/cartSlice"

function Card({ card }) {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        setSelected(cart.some((item) => item.id === card.id))
    }, [cart])

    const onClick = () => {
        if (selected) {
            dispatch(toggleTotal({ id: card.id, amount: 1 }))
            dispatch(removeFromCart(card.id))
        } else {
            dispatch(toggleTotal({ id: card.id, amount: -1 }))
            dispatch(toggleCart({ ...card, set: { ...card.set, total: card.set.total - 1 }, amount: 1 }))
        }
    }
    return <div className="text-center">
        <div className='card bg-white shadow'>
            <div className='text-center p-10'>

                <img src={card.images.large} className="rounded-xl" />

                <p className='font-black text-2xl mt-4'>{card.name}</p>

                <p className='text-blue-400 my-2'>{card.rarity}</p>

                {card.types[0] && card.types.map((type, idx) => <span key={idx} className="badge badge-outline mx-1">{type}</span>)}
                <div className="grid grid-cols-2 my-4">
                    <p className="text-xl text-gray-400">${card.cardmarket.prices.averageSellPrice}</p>
                    <p className="text-xl text-gray-400">{card.set.total} left</p>
                </div>
            </div>
        </div>
        <button className={`btn ${selected ? "" : "btn-warning"} rounded-full text-xl font-medium relative bottom-8 px-16 normal-case shadow-md`} onClick={onClick}>{selected ? "Selected" : "Select card"}</button>

    </div>

}

export default Card