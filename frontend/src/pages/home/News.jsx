import React from "react";
import news1 from "../../assets/books/news1.jpg";
import news2 from "../../assets/books/news2.jpg";
const News = () => {
  return (
    <div>
      <h1 className="text-[25px] font-semibold font-primary tracking-wide mb-2 md:mb-4 mt-12">
        News
        <hr></hr>
      </h1>
      <div className=" md:grid grid-cols-2 ml-4">
        <div className="md:flex gap-2 md:mb-6 md:p-2">
          <div className="flex flex-col gap-2 mb-5">
            <h1 className="px-2 mt-8 mb-4 font-secondary  text-[20px] font-bold md:text-[18px] md:font-semibold tracking-wide hover:text-pink-600 cursor-pointer transition-all delay-100  ">
              Global Climate Summit Calls for Urgent Action
            </h1>
            <p className="sm:block hidden px-2 font-secondary font-semibold text-gray-600 md:w-[390px]">
            World leaders gather at the global climate summit to discuss urgent strategties combat chaange. focusing on reducing carbon emissions and fatering renewable energy solution
            </p>
          </div>
          <img
            className="w-full  h-[250px]   lg:h-[200px] md:w-[150px]  object-cover rounded-md hover:transition-all hover:scale-105 hover:delay-200 hover:ease-in cursor-pointer"
            src={news1}
            alt="news1"
          />
        </div>
        {/* right side----------------- */}
       <div className="md:flex gap-2 md:mb-6">
          <div className="flex flex-col gap-2 mb-5 md:p-2">
            <h1 className="md:px-4 mt-8 font-secondary  text-[20px] font-bold md:text-[18px] md:font-semibold tracking-wide hover:text-pink-600 cursor-pointer transition-all delay-100  ">
              Global Climate Summit Calls for Urgent Action
            </h1>
            <p className="sm:block hidden px-4 font-secondary font-semibold text-gray-600 md:w-[390px]">
              A major breakthrough in aritfical interliigence has been announced by researcher with new asvancements promsing to revilutinzie industries healthcare to finance
            </p>
          </div>
          <img
            className="w-full h-[250px] md:h-[200px] md:w-[150px]  object-cover rounded-md hover:transition-all hover:scale-105 hover:delay-200 hover:ease-in cursor-pointer"
            src={news2}
            alt="news1"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
