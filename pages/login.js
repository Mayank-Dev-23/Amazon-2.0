import { Button } from "@material-ui/core";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { login } from "../slices/userSlice";
import {useRouter} from "next/router";
import {motion} from "framer-motion"


function Login() {
  const dispatch = useDispatch();
  const router = useRouter();



  const Signin = ()=>  {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          
        })
       
      )
    }).then(router.push("/"));
  }

  return (
    <motion.div 
    initial={{y:-100 ,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.5}}
    className="grid place-content-center h-screen bg-gray-100 px-10">
      <Head>
        <title>Login</title>
      </Head>

      <div
        className="flex flex-col bg-white shadow-lg p-10
rounded-md"
      >
        <img src="/logo.png" height={400} width={400} className="mb-10" />

        <Button onClick={Signin} variant="contained">
          SignIn with Google
        </Button>
      </div>
    </motion.div>
  );
}

export default Login;
