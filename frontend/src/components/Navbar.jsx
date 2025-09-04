import { Heart, Search, ShoppingCart, User } from "lucide-react";
import logo from "../assets/logo.jpg";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [currentUser] = useState(true);
  const [isDropDown, setIsDropDown] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/order" },
    { name: "Cart Page", href: "/cart" },
    { name: "Checkout", href: "/checkout" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-4 mt-2">
      <nav className="flex justify-between items-center">
        {/* =---------------------- Left Side ----------------= */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <img
              className="md:w-14 md:h-[55px] w-20 h-20"
              src={logo}
              alt="logo"
            />
          </Link>

          {/* Search bar */}
          <div className="relative sm:w-72 w-44">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              className="bg-[#EAEAEA] w-full py-1 pl-9 pr-3 rounded-md focus:outline-none"
              type="text"
              placeholder="Enter your book"
            />
          </div>
        </div>

        {/* =---------------------- Right Side ----------------= */}
        <div className="flex gap-5 items-center">
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
              <User className="cursor-pointer" />
            )}
          </div>

          <Heart className="hover:text-red-500 cursor-pointer hidden sm:block" />

          <button className="flex items-center space-x-2 bg-yellow-400 px-4 py-2 rounded-lg font-medium tracking-normal">
            <span>0</span>
            <ShoppingCart />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
