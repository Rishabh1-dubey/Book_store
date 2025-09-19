import { Heart, Search, ShoppingCart, User } from "lucide-react";
import logo from "../assets/logo.jpg";
import avatar from "../assets/avatar.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [currentUser] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/order" },
    { name: "Cart Page", href: "/cart" },
    { name: "Checkout", href: "/checkout" },
  ];
  const cartItem= useSelector((state)=>state.cart.items)

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-2 mt-1 ">
      <nav className="flex justify-between items-center">
        {/* =---------------------- Left Side ----------------= */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
           <h1 className="font-primary font-medium text-xl -pl-24">BookHub</h1>
          </Link>

          {/* Search bar */}
          <div className="relative sm:w-72  md:w-[700px]">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800"
            />
            <input
              className="  w-full py-1 pl-9 pr-3 rounded-md focus:outline-none bg-slate-200 text-gray-700 font-primary leading-7 tracking-wider placeholder:text-gray-600"
              type="text"
              placeholder="Search for Books, Items and more "
            />
          </div>
        </div>

        {/* =---------------------- Right Side ----------------= */}
        <div className="flex gap-4 items-center">
          {/* Conditional rendering for logged in user */}
          <div className="relative">
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropDown(!isDropDown)}
                  aria-label="User menu"
                >
                  <img
                    src={avatar}
                    alt="user avatar"
                    className={`size-8 rounded-full cursor-pointer ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isDropDown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white/90 shadow-lg rounded-lg z-40 transition-all duration-200 ease-in-out">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-slate-100 rounded-md"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
              <User className="cursor-pointer" /></Link>
            )}
          </div>

          <Heart className="hover:text-red-500 cursor-pointer hidden sm:block" />

         <Link to="/cart">
          <button className="relative flex items-center space-x-2  px-3 py-2 rounded-lg font-medium tracking-normal">
            {/* <span> {cartItem.length}</span>
            <ShoppingCart /> */}
            <RiShoppingBagLine className="h-6 w-6 text-gray-700" />
            {cartItem.length > 0 && (
              <span className="absolute -right-0.6 bg-[#ea2e0e] rounded-full px-2 py-0.5 -top-1 text-white text-xs">
                {cartItem.length}
              </span>
            )}
          </button>
         </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
