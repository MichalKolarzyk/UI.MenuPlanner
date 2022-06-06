import { apiMenuPlanner } from "../../../api";
import { ErrorModel } from "../../../api/models";
import RecipeModel from "../../../models/RecipeModel";
import { SET_NEWRECIPE, SET_NEWRECIPE_CREATED_SUCCESFULLY, SET_NEWRECIPE_ERROR } from "../../../redux/actionTypes";

export const setCreatedSuccessfully = (createdSuccesfully: boolean) => {
    return {
        type: SET_NEWRECIPE_CREATED_SUCCESFULLY,
        payload: createdSuccesfully,
    };
};

export const setCreatedRecipe = (payload?: RecipeModel) => {
    return {
        type: SET_NEWRECIPE,
        payload,
    };
};

export const setError = (error?: ErrorModel) => {
    return {
        type: SET_NEWRECIPE_ERROR,
        payload: error,
    };
};

export const createRecipe = (recipe?: RecipeModel) => {
    return async (dispach: any) => {
        dispach(setCreatedSuccessfully(false))
        if (!recipe) {
            return;
        }
        try {
            const response = await apiMenuPlanner.addRecipe(recipe);
            dispach(setCreatedRecipe(response.data));
            dispach(setCreatedSuccessfully(true))
        } catch (error: any) {
            dispach(setError(error.response.date))
            dispach(setCreatedSuccessfully(false))
        }
    };
};
