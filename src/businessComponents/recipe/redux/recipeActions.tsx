import { apiMenuPlanner } from "../../../api";
import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPE_IS_LOADING,
    SET_RECIPE,
    SET_NEWRECIPE,
    ADD_RECIPE_STEP,
    UPDATE_RECIPE_STEP,
    REMOVE_RECIPE_STEP,
    SET_RECIPE_EDIT_MODE,
} from "../../../redux/actionTypes";

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

export const setCreatedRecipe = (payload?: RecipeModel) => {
    return {
        type: SET_NEWRECIPE,
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

export const setEditMode = (editMode?: boolean) => {
    return {
        type: SET_RECIPE_EDIT_MODE,
        payload: editMode,
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

export const createRecipe = (recipe?: RecipeModel) => {
    return async (dispach: any) => {
        if (!recipe) {
            return;
        }
        dispach(setIsLoading(true));
        const response = await apiMenuPlanner.addRecipe(recipe);
        dispach(setCreatedRecipe(response.data));
        dispach(setIsLoading(false));
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
