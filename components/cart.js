import { useSelector } from "react-redux";
import CartItem from "./cart_item";
import Modal from 'react-modal';
import useCart from "../lib/hooks/useCart";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: "0.8rem",
        borderWidth: "1px",
        transition: "opacity 200ms ease-in-out"
    },
};

function Cart() {
    const { totalCards, totalPrice, resetCart, payNow, cartOpen, setCartOpen, successOpen, setSuccessOpen } = useCart()
    const { cart } = useSelector(state => state.cart)
    return (
        <div className="fixed bottom-5 right-0 left-0 text-center">
            <Modal
                isOpen={successOpen}
                style={customStyles}
                onRequestClose={() => setSuccessOpen(false)}
            >
                <div className="text-center p-16">
                    <img src="https://www.svgrepo.com/show/243729/checked-success.svg" className="w-48 h-48" />
                    <p className="mt-10 text-xl font-medium">Payment success!</p>
                    {/* <button onClick={() => setSuccessOpen(false)} className="text-white bg-red-600 btn border-none fixed bottom-0 mx-auto right-0 left-0">x</button> */}
                </div>
            </Modal>

  
            {totalCards > 0 && < div className="indicator">
                <span className="indicator-item indicator-start badge border-none bg-red-600 text-white font-medium">
                    {totalCards}
                </span>
                <button className="btn btn-primary gap-2" onClick={() => setCartOpen(true)}>
                    <img src="/shopping-cart.png" className="w-6 h-6" />
                    View cart
                </button>
            </div>}



            <Modal isOpen={cartOpen}
                style={customStyles}
                onRequestClose={() => setCartOpen(false)}>
                <div className="text-center">

                    {cart.map((card, idx) => (
                        <CartItem card={card} key={idx} />
                    ))}
                    <button
                        className="btn btn-ghost normal-case underline font-light"
                        onClick={resetCart}
                    >
                        clear all
                    </button>
                    <div className="flex flex-row max-w-xs text-lg font-semibold justify-between mx-auto">
                        <span>Total cards</span>
                        <span className="text-red-600">{totalCards}</span>
                    </div>
                    <div className="flex flex-row max-w-xs text-2xl font-semibold justify-between mx-auto">
                        <span>Total price</span>
                        <span className="text-red-600">${totalPrice}</span>
                    </div>
                    <div className="modal-action">
                        <div className="w-full">
                            <button onClick={payNow} className="btn btn-primary rounded-full px-12">
                                Pay now
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

        </div >
    );
}


const SuccessModal = () => <div>


</div>



export default Cart;
