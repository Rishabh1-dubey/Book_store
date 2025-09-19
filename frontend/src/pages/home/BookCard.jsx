import { ShoppingCart } from "lucide-react";
import { getImageUrl } from "../../utils/getImageURl";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addItem } from "../../redux/store/slices/cartSlice";
import { toast, Toaster } from "sonner";


const BookCard = ({ item }) => {
const dispatch = useDispatch()
const handleAddtoCart=(item)=>{
  dispatch(addItem(item))
  toast.success("Item Added Successfully Please check to the cart", {duration:1000})
}

  return (
    <div className="rounded-lg transition-shadow duration-300   flex flex-col sm:flex-row gap-4 overflow-x-auto">
      {/* Image */}
      <div className="sm:flex-shrink-0 border rounded-md overflow-hidden  h-full ">
        <Link to={`/books/${item?._id}`}>
          <img
            src={getImageUrl(item.coverImage)}
            alt={item.title}
            className="min-h-  object-cover rounded-md cursor-pointer hover:scale-105 transition-all duration-200 h-64"
          />
        </Link>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-betweenw-[400px]">
        <Link to={`/books/${item._id}`}>
          <h3 className="font-primary text-xl font-semibold hover:text-sky-500 mb-3">
            {item.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4">
          {item.description?.length > 80
            ? item.description.slice(0, 80) + "..."
            : item.description}
        </p>

        <p className="font-medium font-primary text-green-500 mb-5">
          ${item.newPrice}{" "}
          <span className="line-through font-normal text-gray-700 ml-2">
            ${item.oldPrice}
          </span>
        </p>

        <button onClick={()=>handleAddtoCart(item)}  className="flex gap-2 self-start font-primary font-semibold border border-yellow-500 bg-primary text-black px-4 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition-colors duration-300">
          <ShoppingCart />
          <span> Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
