import { apiMenuPlanner } from "../../../api";
import RecipeModel from "../../../models/RecipeModel";
import { SET_RECIPE, ADD_STEP, REMOVE_STEP, SET_RECIPES } from "../../actionTypes";

export const setRecipes = (payload: Array<RecipeModel>) => {
    return {
        type: SET_RECIPES,
        payload,
    };
};

export const setRecipe = (payload: RecipeModel) => {
    return {
        type: SET_RECIPE,
        payload,
    };
};

export const addStep = (payload: string) => {
    return {
        type: ADD_STEP,
        payload,
    }
}

export const removeStep = (payload: number) => {
    return {
        type: REMOVE_STEP,
        payload,
    }
}

export const patchRecipe = (recipe? : RecipeModel) => {
    return async (dispach : any) => {
        if(!recipe){
            return;
        }
        const response = await apiMenuPlanner.patchRecipe(recipe);
        //dispach(setRecipe(response.data));
    };
}

export const fetchRecipes = () => {
    return async (dispach : any) => {
        const response = await apiMenuPlanner.getRecipes();

        dispach(setRecipes(response.data));
    };
};

export const fetchRecipe = (id?: string) => {
    return async (dispach : any) => {
        if(!id){
            return;
        }
        const response = await apiMenuPlanner.getRecipe(id);

        dispach(setRecipe(response.data));
    };
};
