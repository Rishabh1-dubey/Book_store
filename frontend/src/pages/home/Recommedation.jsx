import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import BookCard from "./BookCard";

const Recommedation = () => {
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

  const filteredBooks =
    selectedCategory === "Choose a genere"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  // console.log(filteredBooks);
  return (
    <div className="mb-8">
      <h1 className="text-[25px] font-semibold font-primary tracking-wide mb-2 md:mb-4 mt-12">
      
        Recommended Books for you
         <hr></hr>
      </h1>
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
          filteredBooks.slice(8,18).map((item, index) => (
            <SwiperSlide key={index}>
              <BookCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommedation;
