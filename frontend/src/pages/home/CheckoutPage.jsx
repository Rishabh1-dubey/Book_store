import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";

export const CheckoutPage = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const { currentUser } = getAuth();
  const [formValue, setFormValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalcode: "",
    country: "",
    phone: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setFormValue({
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalcode: "",
      country: "",
      phone: "",
    });
    const newOrder = {
      name: cartItem.name,
      email: currentUser?.email,
      address: {
        city: formValue.city,
        country: formValue.country,
        state: cartItem.state,
        zipcode: formValue.zipcode,
      },
      phone: formValue.phone,
      productIds: cartItem.map((item) => item?._id),
      totalPrice: totalPrice,
    };
    console.log(newOrder)
  };

  const handleFrom = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const totalPrice = cartItem.reduce(
    (total, item) => total + Math.floor(item.newPrice) * item.quantity,
    0
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto  font-secondary px-6 tracking-tighter">
      {/* Right section Order summary */}
      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-2xl font-semibold uppercase mb-6">Checkout</h2>
        <div>
          <h1 className="text-xl font-primary text-gray-500 ">
            Mode : <span className="text-black">CASH ON DELIVERY</span>
          </h1>
          <hr className="mb-8"></hr>

          <p className="text-xl">Total Price: ₹ {totalPrice} </p>
          <p className="text-xl mb-8">Total Cart: {cartItem.length} </p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <h3 className="text-lg font-medium mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700 ">Email</label>
            <input
              type="email"
              name="email"
              value={ currentUser?.email}
              onChange={handleFrom}
              className="w-full p-2 border rounded"
            />
          </div>
          <h3 className="text-lg mb-4"> Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                className="w-full p-2 border rounded"
                value={formValue.firstName}
                onChange={handleFrom}
                type="text"
                name="firstName"
              />
            </div>{" "}
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formValue.lastName}
                onChange={handleFrom}
                className="w-full p-2 border rounded"
              />
            </div>{" "}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Address</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="address"
              value={formValue.address}
              onChange={handleFrom}
            />
          </div>{" "}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="city"
                value={formValue.city}
                onChange={handleFrom}
              />
            </div>{" "}
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="postalcode"
                value={formValue.postalcode}
                onChange={handleFrom}
              />
            </div>{" "}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="country"
              value={formValue.country}
              onChange={handleFrom}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone NO:</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="phone"
              value={formValue.phone}
              onChange={handleFrom}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded"
            >
              Continue To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
