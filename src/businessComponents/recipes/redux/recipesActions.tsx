import { apiMenuPlanner } from "../../../api";
import { TagModel } from "../../../api/models";
import { RecipeRequest } from "../../../api/requests";
import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPES,
    SET_RECIPES_IS_LOADING,
    SET_RECIPES_SELECTED_TAGS,
    SET_RECIPES_SKIP,
    SET_RECIPES_SORTED_BY,
    SET_RECIPES_TAGS,
} from "../../../redux/actionTypes";

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: SET_RECIPES_IS_LOADING,
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

export const setRecipesSkip = (skip?: number) => {
    return{
        type: SET_RECIPES_SKIP,
        payload: skip,
    }
}

export const setRecipesTake = (take?: number) => {
    return{
        type: SET_RECIPES_SKIP,
        payload: take,
    }
}

export const setRecipesTags = (tags?: Array<TagModel>) => {
    return {
        type: SET_RECIPES_TAGS,
        payload: tags,
    }
}

export const setRecipesSelectedTags = (selectedTagsIds?: Array<string>) => {
    return {
        type: SET_RECIPES_SELECTED_TAGS,
        payload: selectedTagsIds,
    }
}

export const fetchTags = () => {
    return async (dispach: any) => {
        const response = await apiMenuPlanner.getTags();
        dispach(setRecipesTags(response.data))
    }
}

export const fetchRecipes = () => {
    return async (dispach: any, getState: any) => {
        const request: RecipeRequest = {
            skip: getState().recipes.skip,
            sortBy: getState().recipes.sortedBy,
            tagIds: getState().recipes.selectedTagsIds,
            take: getState().recipes.take,
        };
        const response = await apiMenuPlanner.getRecipes(request);

        dispach(setRecipes(response.data));
    };
};