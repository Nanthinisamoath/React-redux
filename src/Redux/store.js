import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./TodoSlice.js";
import priceReducer from "./PriceSlice.js";

const store=configureStore({
    reducer: {
        product: productReducer,
        price: priceReducer,
    }
})
export default store