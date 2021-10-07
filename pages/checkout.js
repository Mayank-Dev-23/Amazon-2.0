import Header from "../Components/Header";
import Head from "next/head";
import { selectItems ,selecttotal,selecttotalitems} from "../slices/basketSlice";
import {useSelector} from "react-redux";
import { Button } from "@material-ui/core";
import CheckoutProduct from "../Components/CheckoutProduct";
import {selectUser} from "../slices/userSlice"
import Currency from "react-currency-formatter"
import { motion } from "framer-motion"



function checkout() {
 
  
  const items = useSelector(selectItems);
  const user= useSelector(selectUser);
  const total=useSelector(selecttotal);
  const totalitems=useSelector(selecttotalitems);


  return (
    <motion.div
    initial={{x:100 ,opacity:0}}
    animate={{x:0 ,opacity:1}}
    
    className="bg-gray-100  "
    
    >
      
      <Head>
            <title>
               Checkout
            </title>
        </Head>
        <Header />
     
      
      <motion.main 
      initial={{y:100 ,opacity:0}}
      animate={{y:0,opacity:1}}
      className="max-w-7xl mx-auto flex flex-col md:flex-row p-2">
        <div className="flex-grow m-4 shadow-md ">
          <img
            src="/banner.png"
            alt="banner"
            width={1020}
            height={240}
            
          />
          <div className="flex flex-col p-2  space-y-50 bg-white">
              <h1 className="text-xl md:text-2xl pb-4">{items.length===0 ? "Your Shopping Basket is Empty" : "Shooping Basket"}</h1>

              {items.map((item,i)=>(
                <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.indianprice}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasprime={item.hasprime}
                quantity={item.quantity}
                />
              ))}
          </div>
        </div>

        
          {items.length>0 &&(
            <div className="flex flex-col  bg-white p-10 ">
            <h2 className="whitespace-nowrap">Subtotal ({totalitems} items)
            <span className="font-bold">
            <Currency quantity={total} currency="INR" />
            </span>
            </h2>
            <Button variant="contained" disabled={!user}> {user ? "Proceed to Checkout" :"Signin to Checkout"}</Button>
            </div>
          )}
           
      </motion.main>
    </motion.div>
  
  );
}

export default checkout;
