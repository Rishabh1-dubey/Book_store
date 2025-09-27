import React from 'react'

const Shimmer = () => {
   return (
      <div className="rounded-lg border border-gray-200 p-4 flex flex-col md:flex-row gap-8 animate-pulse">
        {/* Skeleton Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-sm md:max-w-md lg:max-w-lg bg-gray-300 rounded-md"></div>
        </div>

        {/* Skeleton Text */}
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 rounded w-32"></div>
        </div>
      </div>
    );
}

export default Shimmer