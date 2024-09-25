import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className="mx-auto w-6/12">
      {cartItems.length === 0 ? (
        <h1 className="text-2xl font-extrabold text-center m-5 p-5 text-gray-600">
          Your cart is empty!!
        </h1>
      ) : (
        <>
          <h1 className="font-bold text-center text-2xl p-2 m-2">My Cart</h1>
          <ItemsList data={cartItems} />
          <button
            className="bg-black m-5 p-5 rounded-lg text-right text-white font-bold"
            onClick={() => dispatch(clearItems())}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
