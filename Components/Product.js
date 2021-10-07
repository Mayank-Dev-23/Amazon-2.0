import { StarIcon } from "@heroicons/react/solid";
import { Button } from "@material-ui/core";
import Image from "next/image"


import { useState } from "react";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux"
import { addToBasket, selectItems } from "../slices/basketSlice";
import {motion} from "framer-motion";


function Product({id,title,category,description,price,image}) {
   
    const dispatch = useDispatch();
    const max=5;
    const min=1;
   
  
  
   

    const[rating] =useState(
        Math.floor(Math.random()* (max-min +1)) + min
    )
    const[hasprime] =useState(Math.random() < 0.5);
  const indianprice=price*72
    

    const addtobasket =()=>{
        const product={
            id,
            title,
            category,
            description,
            indianprice,
            image,
            rating,
            hasprime,
           
        }

        dispatch(addToBasket(product))
    }
  
    return (
       
<motion.div 
initial={{y:100 ,opacity:0}}
animate={{y:0 ,opacity:1}}
transition={{duration:0.7}}
key={id}  className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-md rounded-md group transition transform hover:scale-105">

    
       <p  className="absolute top-2 right-6 text-gray-400 text-xs ">{category}</p>
       <div className="flex justify-center relative  bg-white p-1 ">
       <Image src={image}
       objectFit="contain"
       width={200}
       height={200}
       
       />
     
      
       <div className="absolute group-hover:bg-gray-200 inset-0 opacity-30
      cursor-pointer  transition transform duration-200 ease-in z-20
       ">
           
       </div>
       <button className="absolute bg-white p-2 top-1/2 rounded-md text-xs opacity-0
       group-hover:opacity-100 z-30 shadow-lg transition transform duration-200 ease-in
       ">View Product</button>
       </div>
       

       <h4 className="my-3 line-clamp-1">{title}</h4>
       <div className="flex">
      {Array(rating).fill().map((_,i)=>{
          <StarIcon className="h-6 text-yellow-300" />
})}
      </div>

      <p className="text-xs my-2 line-clamp-3">{description}</p>
      <div className="mb-5"> 
     <Currency  quantity={indianprice} currency="INR"/>
     </div>
     {hasprime && (
         <div className="flex space-x-2 items-center -mt-4  p-2 rounded-md  ">
             <img src="/primetag.png" 
            
             width={30}
             height={30}
             />
             <p className="text-xs  text-gray-400">FREE prime delivery</p>
         </div>
     )}
      
      <Button variant="contained" color="primary"   onClick={addtobasket}>Add to Basket</Button>
    
</motion.div>

       
    )
}

export default Product
