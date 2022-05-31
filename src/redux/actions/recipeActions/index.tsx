import { apiMenuPlanner } from "../../../api";
import RecipeModel from "../../../models/RecipeModel";
import { SET_RECIPE, ADD_STEP, REMOVE_STEP } from "../../actionTypes";

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

export const fetchRecipe = (id?: string) => {
    return async (dispach : any) => {
        if(!id){
            return;
        }
        const response = await apiMenuPlanner.getRecipe(id);

        dispach(setRecipe(response.data));
    };
};
