import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./reducers/dish.reducer";
import recipeReducer from "./reducers/recipe.reducer";
import userReducer from "./reducers/user.reducer";

export const store = configureStore({
    reducer:{
        user: userReducer,
        dish: dishReducer,
        recipe: recipeReducer,
    }
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch