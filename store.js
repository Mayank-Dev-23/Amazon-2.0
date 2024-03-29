import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import basketReducer from "./slices/basketSlice"

export const store =configureStore({
    reducer:{
            user : userReducer,
            basket: basketReducer,
    }
})