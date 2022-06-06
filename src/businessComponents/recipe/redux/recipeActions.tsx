import { apiMenuPlanner } from "../../../api";
import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPE_IS_LOADING,
    SET_RECIPE,
    ADD_RECIPE_STEP,
    UPDATE_RECIPE_STEP,
    REMOVE_RECIPE_STEP,
    SET_RECIPE_MODE,
    SET_RECIPE_DELETED_SUCCESFULLY,
    ADD_RECIPE_TAG,
    REMOVE_RECIPE_TAG,
} from "../../../redux/actionTypes";
import { RecipeReducerModes } from "./recipe.reducer";

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: SET_RECIPE_IS_LOADING,
        payload: isLoading,
    };
};

export const setRecipe = (payload?: RecipeModel) => {
    return {
        type: SET_RECIPE,
        payload,
    };
};

export const addStep = (payload: string) => {
    return {
        type: ADD_RECIPE_STEP,
        payload,
    };
};

export const updateStep = (index: number, value: string) => {
    return {
        type: UPDATE_RECIPE_STEP,
        payload: { index: index, value: value },
    };
};

export const removeStep = (payload: number) => {
    return {
        type: REMOVE_RECIPE_STEP,
        payload,
    };
};

export const setRecipeMode = (mode?: RecipeReducerModes) => {
    return {
        type: SET_RECIPE_MODE,
        payload: mode,
    };
};

export const addRecipeTag = (tagId?: string) => {
    return {
        type: ADD_RECIPE_TAG,
        payload: tagId,
    };
};

export const removeRecipeTag = (tagId?: string) => {
    return {
        type: REMOVE_RECIPE_TAG,
        payload: tagId,
    };
};

export const setRecipeDeletedSuccesfully = (deletedSuccesfully?: boolean) => {
    return {
        type: SET_RECIPE_DELETED_SUCCESFULLY,
        payload: deletedSuccesfully,
    };
};

export const patchRecipe = (recipe?: RecipeModel) => {
    return async (dispach: any) => {
        if (!recipe) {
            return;
        }
        const response = await apiMenuPlanner.patchRecipe(recipe);
        //dispach(setRecipe(response.data));
    };
};

export const deleteRecipe = (id?: string) => {
    return async (dispach: any) => {
        if (!id) {
            return;
        }
        const response = await apiMenuPlanner.deleteRecipe(id);
    };
};

export const fetchRecipe = (id?: string) => {
    return async (dispach: any) => {
        if (!id) {
            return;
        }
        const response = await apiMenuPlanner.getRecipe(id);

        dispach(setRecipe(response.data));
    };
};
