import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import BookCard from "./BookCard";
import axios from "axios";

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

  // render a book
  const fetchData = async () => {
    try {
      console.log("Attempting to fetch from:", import.meta.env.VITE_BASE_URL);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/allbook`
      );
      setBooks(res.data.allBook);
    } catch (error) {
      console.error("Error fetching books:", err);
    }
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

  // console.log(filteredBooks);

  return (
    <div className=" pl-4 mt-5 md:mt-0  ">
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

      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* displaying the image card on the UI */}

        {filteredBooks.length > 0 &&
          filteredBooks.map((item, index) => (
            <SwiperSlide key={index}>
              <BookCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSeller;
