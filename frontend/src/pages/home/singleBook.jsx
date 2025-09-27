import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useAsyncError, useParams } from "react-router-dom";
import BookCard from "./BookCard";
import { getImageUrl } from "@/utils/getImageURl";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/store/slices/cartSlice";
import { toast } from "sonner";
import Shimmer from "./Shimmer";

const SingleBook = () => {
  const [book, setBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  // render a book
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/${id}`
      );
      setBooks(res.data.singleBook);
      setLoading(false);
      console.log(res.data.singleBook);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <SingleBookCard item={book} loading={loading} />
    </div>
  );
};

export default SingleBook;

export const SingleBookCard = ({ item, loading }) => {
    const dispatch = useDispatch()
  const handleAddtoCart = (item) => {
    dispatch(addItem(item));
    toast.success("Item Added Successfully Please check to the cart");
  };
  if (loading) return <Shimmer />;

  return (
    <div className="rounded-lg transition-shadow md:mt-8 flex flex-col md:flex-row gap-8 md:gap-16 p-4">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Link to={`/books/${item?._id}`}>
          <img
            src={getImageUrl(item.coverImage)}
            alt={item.title}
            className="object-cover rounded-md cursor-pointer transition-all duration-200 h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-sm md:max-w-md lg:max-w-lg hover:scale-105"
          />
        </Link>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4">
        <Link to={`/books/${item._id}`}>
          <h3 className="font-primary text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold hover:text-sky-500">
            {item.title}
          </h3>
        </Link>

        <p className="text-gray-600 font-secondary text-sm sm:text-base md:text-lg">
          {item.description?.length > 80 ? item.description : item.description}
        </p>

        <p className="font-medium font-primary text-xl sm:text-2xl text-red-500">
          ${item.newPrice}{" "}
          <span className="line-through font-normal text-gray-700 ml-2">
            ${item.oldPrice}
          </span>
        </p>

        <p className="capitalize text-sm sm:text-base">
          <span className="text-gray-800 font-semibold font-primary">
            Category
          </span>{" "}
          | {item.category}
        </p>

        <button
          onClick={() => handleAddtoCart(item)}
          className="flex items-center gap-2 font-primary font-semibold border border-yellow-500 text-black px-4 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition-colors duration-300 w-fit"
        >
          <ShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
