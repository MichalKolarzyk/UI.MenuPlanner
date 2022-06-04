import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPES,
    SET_RECIPE_IS_LOADING,
    SET_RECIPES_SORTED_BY,
} from "../../../redux/actionTypes";

export class RecipeReducerState {
    recipes?: Array<RecipeModel>;
    isLoading?: boolean = false;
    sortedBy?: string;
}

export const initialState = new RecipeReducerState();

const recipesReducer = (state: RecipeReducerState = initialState, action: any): RecipeReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: payload,
            };
        case SET_RECIPE_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        case SET_RECIPES_SORTED_BY: {
            return {
                ...state,
                sortedBy: payload,
            };
        }
        default:
            return state;
    }
};

export default recipesReducer;
