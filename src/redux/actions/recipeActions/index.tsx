import { apiMenuPlanner } from "../../../api";
import { RecipeRequest } from "../../../api/Requests";
import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPE,
    ADD_STEP,
    REMOVE_STEP,
    SET_RECIPES,
    UPDATE_STEP,
    SET_RECIPE_EDIT_MODE,
    SET_RECIPE_IS_LOADING,
    SET_CREATED_RECIPE,
    SET_SORTED_BY,
} from "../../actionTypes";

export const setIsLoading = (isLoading: boolean)=>{
    return{
        type: SET_RECIPE_IS_LOADING,
        payload: isLoading
    }
}

export const setRecipes = (payload: Array<RecipeModel>) => {
    return {
        type: SET_RECIPES,
        payload,
    };
};

export const setRecipe = (payload?: RecipeModel) => {
    return {
        type: SET_RECIPE,
        payload,
    };
};

export const setCreatedRecipe = (payload?: RecipeModel) => {
    return {
        type: SET_CREATED_RECIPE,
        payload,
    }
} 

export const addStep = (payload: string) => {
    return {
        type: ADD_STEP,
        payload,
    };
};

export const updateStep = (index: number, value: string) => {
    return {
        type: UPDATE_STEP,
        payload: { index: index, value: value },
    };
};

export const removeStep = (payload: number) => {
    return {
        type: REMOVE_STEP,
        payload,
    };
};

export const setEditMode = (editMode?: boolean) => {
    return {
        type: SET_RECIPE_EDIT_MODE,
        payload: editMode,
    };
};

export const setSortedBy = (sortedBy?: string) => {
    return {
        type: SET_SORTED_BY,
        payload: sortedBy,
    }
}

export const patchRecipe = (recipe?: RecipeModel) => {
    return async (dispach: any) => {
        if (!recipe) {
            return;
        }
        const response = await apiMenuPlanner.patchRecipe(recipe);
        //dispach(setRecipe(response.data));
    };
};

export const fetchRecipes = () => {
    return async (dispach: any, getState: any) => {
        const request : RecipeRequest  ={
            skip: 0,
            sortBy: getState().recipe.sortedBy,
            tagIds: undefined,
            take: 100,
        }
        const response = await apiMenuPlanner.getRecipes(request);

        dispach(setRecipes(response.data));
    };
};

export const deleteRecipe = (id?: string) => {
    return async (dispach: any) => {
        if(!id){
            return;
        }
        const response = await apiMenuPlanner.deleteRecipe(id);
    }
}

export const createRecipe = (recipe?: RecipeModel) => {
    return async (dispach: any) => {
        if(!recipe){
            return;
        }
        dispach(setIsLoading(true))
        const response = await apiMenuPlanner.addRecipe(recipe);
        dispach(setCreatedRecipe(response.data));
        dispach(setIsLoading(false))
    }
}

export const fetchRecipe = (id?: string) => {
    return async (dispach: any) => {
        if (!id) {
            return;
        }
        const response = await apiMenuPlanner.getRecipe(id);

        dispach(setRecipe(response.data));
    };
};

