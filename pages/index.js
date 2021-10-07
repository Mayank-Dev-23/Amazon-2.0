import Head from "next/head";
import { useSelector } from "react-redux";
import { login, selectUser } from "../slices/userSlice";

import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Productfeed from "../Components/Productfeed";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useEffect ,useState} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion";


export default function Home({ products }) {
  const user = useSelector(selectUser);
  const[mounted,Setmounted] =useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    Setmounted(true)
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
   mounted &&
      <motion.div
     initial={{x:60, opacity:0}}
     animate={{x:0 ,opacity:1}}
      className="bg-gray-200">
      <Head>
        <title>Amazon</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Header />
      <Banner />
      <ToastContainer />

      <main className="max-w-screen-7xl mx-auto -mt-16">
        <Productfeed products={products} />
      </main>
    </motion.div>
  
   
  );
}

export async function getServerSideProps() {
  const url = "https://fakestoreapi.com/products";
  const products = await fetch(url).then((response) => response.json());
  return {
    props: {
      products,
    },
  };
}
