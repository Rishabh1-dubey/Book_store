import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../utils/getImageURl";
import { Link } from "react-router-dom";
const Categories = [
  "Choose a genere",
  "Horror",
  "business",
  "adventure",
  "fiction",
  "marketing",
];

const TopSeller = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genere");

  const fetchData = async () => {
    const res = await fetch("book.json");
    const data = await res.json();
    setBooks(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //   displaying the books by condintionally
  const filteredBooks =
    selectedCategory === "Choose a genere"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  return (
    <div className=" pl-4 ">
      <h1 className="text-[25px] font-semibold font-primary tracking-wide mb-2 md:mb-4">
        Top Seller
      </h1>
      {/* Category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onClick={(e) => setSelectedCategory(e.target.value)}
          id="category"
          name="category"
          className="border border-gray-200 bg-[#EAEAEA] px-2 py-1 rounded-lg cursor-pointer focus:outline-none"
        >
          {Categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
     
        {/* displaying the image card on the UI */}
        <div className=" flex  gap-4 overflow-auto">
          {filteredBooks.map((item) => (
            <div
              key={item._id}
              className="flex flex-row gap-4 items-center p-4 rounded-md"
            >
              {/* 🖼️ Image */}
             <Link  to={`/books/${item._id}`} className="flex">
              <img
                className="w-40 h-auto object-contain flex-shrink-0"
                src={`${getImageUrl(item.coverImage)}`}
                alt={item.title}
              />
             </Link>

              {/* 📄 Text Content */}
              <div className="flex flex-col justify-center gap-3  w-60  ">
                <div className="font-primary font-semibold text-xl">
                  {item.title}
                </div>
                <div>{item.description.slice(0, 60)}...</div>
                <p>
                  <span className="text-green-600 font-semibold">
                    ${item.newPrice}
                  </span>
                  <span className="line-through text-gray-500 pl-2">
                    ${item.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default TopSeller;
