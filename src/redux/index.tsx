import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./reducers/dish.reducer";
import userReducer from "./reducers/user.reducer";

export const store = configureStore({
    reducer:{
        user: userReducer,
        dish: dishReducer,
    }
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch