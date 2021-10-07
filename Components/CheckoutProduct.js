import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { Button, IconButton } from "@material-ui/core";
import {
  addToBasket,
  decreasequantity,
  removeFromBasket,
} from "../slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState } from "react";

function CheckoutProduct({
  id,
  title,
  category,
  description,
  price,
  image,
  hasprime,
  rating,
  quantity,
}) {
  const dispatch = useDispatch();

  const addtobasket = () => {
    const product = {
      id,
      title,
      category,
      description,
      price,
      image,
      rating,
      hasprime,
    };

    dispatch(addToBasket(product));
  };

  const removefrombasket = () => {
   
    dispatch(removeFromBasket({ id }));
  };

  const decreaseQuantity = () => {
    dispatch(decreasequantity({ id }));
  };

 

  return (
    <motion.div 
    initial={{y:-90,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.6}}
    exit={{opacity:0}}
     
    
    className="grid grid-cols-6 mb-5  p-5 bg-white shadow-md hover:scale-105 transform transition rounded-md border-t-black border-2">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-4 mx-5">
        <p className="line-clamp-2">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-6 text-yellow-300" />
            ))}
        </div>
        <p className="line-clamp-2 text-xs  my-2">{description}</p>
        <div className="flex text-xs sm:text-sm md:text-md lg:text-lg">
          <Currency quantity={price} currency="INR" />
          <span>
            {" "}
            <span className="ml-1"> X</span> {quantity} ={" "}
            <Currency quantity={price * quantity} currency="INR" />
          </span>
        </div>

        {hasprime && (
          <div className="flex items-center space-x-1">
            <img src="/primetag.png" className="w-12" />
            <p className="text-xs text-gray-400 line-clamp-1">
              FREE Next day Delivery
            </p>
          </div>
        )}
      </div>
      <div className=" flex flex-col my-auto col-span-1justify-self-end  ">
        <div className="flex mb-10 justify-center">
          <button
            className="bg-gray-100 w-12  p-1 rounded-sm"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <p className="p-1 bg-gray-200 w-8 flex items-center justify-center">
            {quantity}
          </p>
          <button
            className="bg-gray-100 w-12 p-1 rounded-sm "
            onClick={addtobasket}
          >
            +
          </button>
        </div>

        <div className="flex justify-center"
        
        >
          <IconButton aria-label="delete" onClick={removefrombasket}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </motion.div>
  );
}

export default CheckoutProduct;
