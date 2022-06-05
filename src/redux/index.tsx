import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./reducers/dish.reducer";
import recipeReducer from "../businessComponents/recipe/redux/recipe.reducer";
import userReducer from "./reducers/user.reducer";
import recipesReducer from "../businessComponents/recipes/redux/recipes.reducer";
import registrationReducer from "../businessComponents/registration/redux/registration.reducer";

export const store = configureStore({
    reducer:{
        user: userReducer,
        dish: dishReducer,
        recipe: recipeReducer,
        recipes: recipesReducer,
        registration: registrationReducer,
    }
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch