import { apiMenuPlanner } from "../../../api";
import { RecipeRequest } from "../../../api/requests";
import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPE_IS_LOADING,
    SET_RECIPES,
    SET_RECIPES_SORTED_BY,
} from "../../../redux/actionTypes";

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: SET_RECIPE_IS_LOADING,
        payload: isLoading,
    };
};

export const setRecipes = (payload: Array<RecipeModel>) => {
    return {
        type: SET_RECIPES,
        payload,
    };
};

export const setSortedBy = (sortedBy?: string) => {
    return {
        type: SET_RECIPES_SORTED_BY,
        payload: sortedBy,
    };
};

export const fetchRecipes = () => {
    return async (dispach: any, getState: any) => {
        const request: RecipeRequest = {
            skip: 0,
            sortBy: getState().recipes.sortedBy,
            tagIds: undefined,
            take: 100,
        };
        const response = await apiMenuPlanner.getRecipes(request);

        dispach(setRecipes(response.data));
    };
};