import { configureStore } from "@reduxjs/toolkit"
import Count from "./count/Count_redux"

export const store = configureStore({
    reducer: {
        Count: Count,
    },
})