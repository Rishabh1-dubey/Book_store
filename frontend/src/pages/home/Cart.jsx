import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../utils/getImageURl";
import { DecrementItem, IncrementItem, removeItem } from "../../redux/store/slices/cartSlice";
import  cartImg from "../../assets/books/cart-empty.png"


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const deleteCart = (id) => {
    dispatch(removeItem(id));
  };

  const IncrementCart = (id) => {
    dispatch(IncrementItem(id));
  }; 
  const DecrementCart = (id) => {
    dispatch(DecrementItem(id));
  };

  return (
    <div className="flex bg-slate-200  ">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((cart) => (
          <div index={cart._id} className="">
            <img src={getImageUrl(cart?.coverImage)} alt={cart.title} />
            <h1 className="border  ">{cart?.title}</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => DecrementCart(cart._id)}
                className="bg-gray-300 px-2 py-1 rounded"
              >
                -
              </button>
              <span>{cart.quantity}</span>
              <button
                onClick={() => IncrementCart(cart._id)}
                className="bg-gray-300 px-2 py-1 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => deleteCart(cart._id)}
              className="bg-yellow-400 px-2 py-1 rounded-md"
            >
              Delelte Cart
            </button>
          </div>
        ))
      ) : (
        <img className="h-[500px] object-cover border border-red" src={cartImg} alt="Cart"/>
      )}
    </div>
  );
};

export default Cart;
