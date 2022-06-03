import RecipeModel from "../../models/RecipeModel";
import { ADD_STEP, SET_RECIPE, REMOVE_STEP, SET_RECIPES, UPDATE_STEP, SET_RECIPE_EDIT_MODE, SET_RECIPE_IS_LOADING } from "../actionTypes";

export class RecipeReducerState {
    recipe?: RecipeModel;
    recipes?: Array<RecipeModel>;
    editMode?: boolean = false;
    isLoading?: boolean = false;
}

export const initialState = new RecipeReducerState();

const recipeReducer = (state: RecipeReducerState = initialState, action: any): RecipeReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: payload,
            };
        case SET_RECIPE:
            return {
                ...state,
                recipe: payload,
            };
        case ADD_STEP:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: [...(state.recipe?.steps ?? []), payload],
                } as RecipeModel,
            };
        case UPDATE_STEP:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: state.recipe?.steps?.map?.((item, index) => {
                        return index === payload.index ? payload.value : item;
                    }),
                } as RecipeModel,
            };
        case REMOVE_STEP:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: [...(state.recipe?.steps?.filter((item, index) => index !== payload) ?? [])],
                } as RecipeModel,
            };
        case SET_RECIPE_EDIT_MODE:
            return{
                ...state,
                editMode: payload,
            }
        case SET_RECIPE_IS_LOADING:
            return{
                ...state,
                isLoading: payload,
            }
        default:
            return state;
    }
};

export default recipeReducer;
