import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-10 font-secondary bg-white">
      {/* ✅ Responsive container */}
      <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-12">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            NewsLetter
          </h3>
          <p className="text-gray-500 text-sm mb-3">
            Be the first to hear about new Products, Exclusive events, and
            online offers
          </p>
          <p className="font-medium text-xs sm:text-sm text-gray-500 mb-5">
            Sign up and get 10% discount off your first order
          </p>

          {/* Newsletter form */}
          <form className="flex flex-col sm:flex-row">
            <input
              className="font-primary p-3 w-full text-sm border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-0 bg-black text-white px-6 py-3 text-sm rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-gray-800 transition-all font-primary"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            {["Horror", "Business", "Adventure", "Fiction"].map((cat) => (
              <li key={cat}>
                <Link
                  to="#"
                  className="hover:text-gray-700 transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            {["Contact Us", "About Us", "FAQs", "Support Us"].map((link) => (
              <li key={link}>
                <Link
                  to="#"
                  className="hover:text-gray-700 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex items-center space-x-5 mb-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 hover:text-blue-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 hover:text-red-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-blue-500" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 text-sm">
            <Phone className="h-5 w-5" />
            <p>+91 (456) 565-667</p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-12 border-t border-gray-200 pt-6 text-center">
        <p className="text-gray-400 text-xs sm:text-sm tracking-tight mb-3">
          © 2025, All Rights Reserved
        </p>
        <h3 className="text-sm sm:text-base font-medium text-gray-700">
          Made with ❤️ by Rishabh
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
