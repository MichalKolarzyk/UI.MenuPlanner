import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPES,
    SET_RECIPES_SORTED_BY,
    SET_RECIPES_IS_LOADING,
    SET_RECIPES_SKIP,
    SET_RECIPES_TAKE,
} from "../../../redux/actionTypes";

export class RecipeReducerState {
    recipes?: Array<RecipeModel>;
    isLoading?: boolean = false;
    sortedBy?: string;
    skip?: number = 0;
    take?: number = 5;
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
        case SET_RECIPES_IS_LOADING:
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
        case SET_RECIPES_SKIP: {
            return{
                ...state,
                skip: payload,
            }
        }
        case SET_RECIPES_TAKE: {
            return{
                ...state,
                take: payload,
            }
        }
        default:
            return state;
    }
};

export default recipesReducer;
