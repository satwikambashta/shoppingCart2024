import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTile = ({ singleProductTile }) => {
  const navigate = useNavigate();

  function handleNavigateToProductDetails(getCurrentProductId) {
    // console.log(getCurrentProductId);
    navigate(`/product-details/${getCurrentProductId}`);
  }

  return (
    <div className="relative group border border-cyan-900 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex items-start justify-between space-x-4">
        <div className="font-bold text-gray 900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {singleProductTile?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${singleProductTile?.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleNavigateToProductDetails(singleProductTile?.id)}
        className="px-5 mt-5 w-full py-2 rounded-sm bg-black text-white"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductTile;
