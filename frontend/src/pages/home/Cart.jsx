import { useDispatch, useSelector } from "react-redux";
import { getImageUrl } from "../../utils/getImageURl";
import {
  clearCart,
  DecrementItem,
  IncrementItem,
  removeItem,
} from "../../redux/store/slices/cartSlice";
import cartImg from "../../assets/books/cart-empty.png";
import { MdDelete } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
 

  const deleteCart = (id) => {
    //this is for individaul delete cart
    dispatch(removeItem(id));
  };
  const deleteWholeCart = () => {
    // this is for whole cart
    dispatch(clearCart());
  };

  const IncrementCart = (id) => {
    dispatch(IncrementItem(id));
  };
  const DecrementCart = (id) => {
    dispatch(DecrementItem(id));
  };

  let DeliveryCharges = 15;
  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + Math.floor(item.newPrice) * item.quantity,
    0
  );

  const subTotal = totalPrice + DeliveryCharges;
  return (
    <div className="bg-slate-50  p-6">
      <br></br>
      <h1 className="font-primary font-semibold text-3xl text-center  mb-8">
        Shopping Cart{" "}
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 mx-auto">
        <div className=" flex  justify-between">
          <div className="bg-slate-200 border p-4 rounded-lg w-full h-full">
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
                    <div className=" flex items-center">
                      <button
                        onClick={() => DecrementCart(cart._id)}
                        className="mt-[3px] px-2 mr-1 border bg-red-500"
                      >
                        -
                      </button>
                      <span>{cart?.quantity}</span>
                      <button
                        onClick={() => IncrementCart(cart._id)}
                        className="mt-[3px] px-2 ml-2 border bg-blue-500"
                      >
                        +
                      </button>
                    </div>
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
                className="md:h-[300px] w-full md:w-auto  mt-12 mx-auto opacity-70"
                src={cartImg}
                alt="Empty cart"
              />
            )}
          </div>
        </div>

        {/* --------------------right grid---------------------------- */}
        {/* payment to chekcout */}
       <div className="mt-12 mx-auto w-full md:pl-20 px-4">
  <h1 className="font-primary font-semibold tracking-wide text-3xl">
    Cart total : {cartItems.length}
  </h1>

  <p className="mt-4 font-mono text-xl mb-2">
    Do You have a coupon code?
  </p>

  <div className="w-full flex justify-between border-b-2 border-yellow-500 p-1">
    <p className="font-mono font-semibold">enter your coupon code</p>
    <BsArrowReturnRight />
  </div>

  {/* Subtotal */}
  <div className="flex justify-between mt-4">
    <h1 className="text-lg font-mono font-semibold">Subtotal</h1>
    <h1 className="font-medium">₹ {totalPrice}</h1>
  </div>

  {/* Delivery Charges */}
  <div className="flex justify-between mt-4">
    <h1 className="text-lg font-mono font-semibold">Delivery Charges</h1>
    <h1 className="font-medium mb-4">₹ {DeliveryCharges}</h1>
  </div>

  <hr />

  {/* Final Total */}
  <div className="flex justify-between mt-4 mb-2">
    <h1 className="text-lg font-mono font-semibold">Total</h1>
    <h1 className="font-medium mb-4">₹ {subTotal}</h1>
  </div>

  <div className=" mb-24 flex flex-col items-center gap-6">
    {/*  Clear Cart button */}
    <button
      onClick={deleteWholeCart}
      className="lg:relative lg:left-52 bg-orange-950 hover:bg-orange-500 text-white px-6 py-3 text-sm rounded-full transition-all font-primary w-full sm:w-auto "
    >
      Clear Cart
    </button>

    {/*  Proceed to checkout button */}
    <Link to="/checkout" className="w-full sm:w-auto">
      <button className="border border-yellow-300 py-2 px-6 w-full sm:w-[350px] md:w-[450px] lg:w-[500px] rounded-lg bg-blue-500 text-white font-primary font-semibold text-lg">
        Proceed to checkout
      </button>
    </Link>

    {/* Continue Shopping */}
    <p className="text-gray-400 text-center mt-6">
      Or{" "}
      <Link to="/">
        <span className="underline text-blue-700 font-primary">
          Continue Shopping
        </span>
      </Link>
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Cart;
