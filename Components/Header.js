import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUser, logout } from "../slices/userSlice";
import { useRouter } from "next/router";
import {  selecttotalitems} from "../slices/basketSlice";


function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(selectUser);
  const router = useRouter();

  const totalitems= useSelector(selecttotalitems);


  const toLoginpage = () => {
    if (!user) {
      router.push("/login");
    }
  };

  const signout = () => {
    auth.signOut().then(() => {
      dispatch(
        logout({
          displayName: null,
          email: null,
          photoUrl: null,
        })
      );
    });
  };

 
  return (
    <header className="  bg-gray-200 shadow-md flex  items-center p-2  px-2  flex-grow sticky top-0 z-50  ">
      {/* left */}
      <div 
      onClick={() => router.push("/")}
      className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <img
          
          src="/logo.png"
          width={100}
          height={100}
          className="cursor-pointer "
        />
      </div>

      {/* center */}
      <div className="bg-yellow-300 m-2 h-10 hover:bg-yellow-400 cursor-pointer sm:flex items-center hidden rounded-md flex-grow  mx-2 ">
        <input
          type="text"
         
      
          className="  focus:outline-none p-2 h-full w-6 flex-grow  flex-shrink rounded-l-md px-4 text-sm  bg-white text-gray-700"
        />
        <SearchIcon className="h-12 p-3" />
      </div>

      {/* right */}
      <div className="flex items-center text-xs space-x-4 mx-3 whitespace-nowrap">
        {/* first */}

        <div className=" md:text-sm flex items-center space-x-3">
          <div className="cursor-pointer ">
            <Avatar onClick={signout} src={user?.photoUrl} className="h-10" />
          </div>

          <div className="link" onClick={toLoginpage}>
            <p>Hello,{user ? `${user.displayName}` : `SignIn`}</p>
            <p>Accounts & lists</p>
          </div>
        </div>

        {/* second */}
        <div className="link md:text-sm hidden sm:block ">
          <p>Returns</p>
          <p>& Orders</p>
        </div>

        {/* third */}
        <div className="link md:text-sm relative flex items-center"
         onClick={()=>router.push("/checkout")}
        >
          <span className="absolute bg-yellow-300  rounded-full h-4 w-4 text-center font-bold top-0 ">
          {totalitems}
          </span>
          <ShoppingCartIcon
         
          className="h-10" />
          <p>Basket</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
