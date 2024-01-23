import { configureStore } from "@reduxjs/toolkit";
import restaurantslce from '../redux/restaurantSlice'
const store = configureStore({
    reducer:{
        restaurantslce
    }
})

export default store