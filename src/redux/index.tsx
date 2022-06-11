import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../businessComponents/recipe/redux/recipe.reducer";
import recipesReducer from "../businessComponents/recipes/redux/recipes.reducer";
import registrationReducer from "../businessComponents/registration/redux/registration.reducer";
import newRecipeReducer from "../businessComponents/newRecipe/redux/newRecipe.reducer";
import userReducer from "../businessComponents/user/user.reducer";
import loginReducer from "../businessComponents/login/login.reducer";
import dishesReducer from "../businessComponents/dishes/dishes.reducer";
import apiReducer from "../businessComponents/api/Api.reducer";

export const store = configureStore({
    reducer:{
        user: userReducer,
        recipe: recipeReducer,
        recipes: recipesReducer,
        registration: registrationReducer,
        newRecipe: newRecipeReducer,
        login: loginReducer,
        dishes: dishesReducer,
        api: apiReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch