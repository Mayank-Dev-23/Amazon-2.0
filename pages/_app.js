import '../styles/globals.scss'
import {Provider} from "react-redux";
import {store} from "../store"
import {useEffect, useState} from "react"
import Loading from "../Components/Loading"
import {createTheme, ThemeProvider} from "@material-ui/core/styles"




 const theme = createTheme({
  palette:{
    primary:{
      // main:"#ffd54f"
      main:"#ffd300"
    }
  }
})

const MyApp =({ Component, pageProps }) =>{
  
  const[loading,Setloading]=useState(false);

  useEffect(() => {
    Setloading(true);
    setTimeout(()=>{
      Setloading(false);
    },2000)
  }, []);




 
  
  
return  (
  
   <Provider store={store}>
{loading ? (<Loading />) :(<ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>)}
  </Provider>
);



  }
  


export default MyApp
