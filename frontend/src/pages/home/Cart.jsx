import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../utils/getImageURl";
import {
  DecrementItem,
  IncrementItem,
  removeItem,
} from "../../redux/store/slices/cartSlice";
import cartImg from "../../assets/books/cart-empty.png";
import { MdDelete } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";


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

 // Total price
const totalPrice = cartItems.reduce(
  (total, item) => total + item.newPrice * item.quantity,
  0
);
  return (
    <>
      <h1 className="font-primary font-semibold text-3xl text-center mb-6">
        Shopping Cart{" "}
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 ">
        <div className=" flex  justify-between">
          <div className="bg-slate-200 border p-4 rounded-lg w-full">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((cart) => (
                <div
                  key={cart._id}
                  className="flex md:flex-row md:items-center justify-between border rounded-lg p-3 gap-4 mt-4 bg-white shadow-sm"
                >
                  {/* Image */}
                  <img
                    className="h-28 w-24 object-cover rounded-md"
                    src={getImageUrl(cart?.coverImage)}
                    alt={cart.title}
                  />

                  {/* Text content */}
                  <div className="flex-1 text-left font-primary">
                    <h1 className="text-lg font-semibold">{cart.title}</h1>
                    <p className="text-sm text-gray-800">
                      Category:{" "}
                      <span className="text-gray-500">{cart?.category}</span>
                    </p>
                    <p className="font-medium text-gray-900">
                      Qty:{" "}
                      <span className="text-gray-500">{cart?.quantity}</span>
                    </p>
                  </div>

                  {/* Price + Delete */}
                  <div className="flex mr-28 md:flex-col md:mr-5 items-center gap-4">
                    <p className=" font-semibold text-gray-800">
                      ₹{cart?.newPrice}
                    </p>
                    <button onClick={() => deleteCart(cart._id)}>
                      <MdDelete
                        size={22}
                        className="hover:text-red-500 text-gray-600 transition-colors"
                      />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <img
                className="h-[300px] mt-12 mx-auto opacity-70"
                src={cartImg}
                alt="Empty cart"
              />
            )}
          </div>
        </div>
        {/* payment to chekcout */}
        <div className="mt-12 mx-auto">
          <h1 className="font-secondary font-extrabold text-3xl">
            Cart total : {cartItems.length}
          </h1>
          <p className="mt-4 font-mono text-xl mb-2">
            Do You have a coupon code?
          </p>
          <div className="flex justify-between border-b-2 w-[400px] border-yellow-500 p-1">
            <p className="font-mono font-semibold">enter your coupon code</p>
            <BsArrowReturnRight />
          </div>
          
          <div className="flex justify-between mt-4">
            
            <h1 className="text-lg font-mono font-semibold">Subtotal</h1>
            <h1 className="font-medium">{totalPrice}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
