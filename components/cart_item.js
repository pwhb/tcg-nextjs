import useCart from "../lib/hooks/useCart"


function CartItem({ card }) {

    const { updateCart, deleteCartItem } = useCart()
    const clickUp = () => {
        if (card.set.total > 0) {
            updateCart({ card, amount: 1 })
        }
    }
    const clickDown = () => {
        updateCart({ card, amount: -1 })
    }
    const removeItem = () => {
        deleteCartItem(card.id)
    }

    return <div className="card bg-white mb-5 max-w-lg">
        <div className="grid grid-cols-3">
            <img src={card.images.large} className="rounded-xl h-32" />
            <div className="flex flex-col items-start justify-between my-4">
                <div className="flex flex-col items-start">
                    <p className='font-black text-2xl'>{card.name}</p>
                    <p className="text-sm text-gray-500">${card.cardmarket.prices.averageSellPrice} per card</p>
                </div>
                <p className="text-gray-500">
                    <span className="text-red-600 font-semibold">{card.set.total}</span> cards left
                </p>
            </div>
            <div className="flex flex-col items-end justify-between my-4">
                <div className="flex flex-row">
                    <p className="text-2xl font-bold text-blue-400">{card.amount}</p>
                    <div className="flex flex-col content-start relative bottom-1">

                        <button><img src="https://www.svgrepo.com/show/388870/up.svg" className={`w-3 h-3 ${card.set.total == 0 ? "opacity-40" : ""}`} onClick={clickUp} /></button>
                        {card.amount > 1 ? <button><img src="https://www.svgrepo.com/show/387413/down.svg" className="w-3 h-3" onClick={clickDown} /></button> :
                            <button onClick={removeItem} ><span className="font-medium text-red-600 w-4 h-4 relative bottom-2">x</span></button>
                        }

                    </div>
                </div>
                <div>
                    <p>price</p>
                    <p className="text-xl font-bold text-blue-400">${(card.cardmarket.prices.averageSellPrice * card.amount).toFixed(2)}</p>
                </div>
            </div>
        </div>
    </div>
}

export default CartItem