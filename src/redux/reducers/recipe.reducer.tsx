import { stat } from "fs";
import RecipeModel from "../../models/RecipeModel";
import { ADD_STEP, SET_RECIPE, REMOVE_STEP } from "../actionTypes";

export class RecipeReducerState {
    recipe?: RecipeModel;
}

export const initialState = new RecipeReducerState();

const recipeReducer = (state: RecipeReducerState = initialState, action: any) : RecipeReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_RECIPE:
            return{
                ...state,
                recipe: payload
            }
        case ADD_STEP:
            return{
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: [...state.recipe?.steps ?? [], payload]
                } as RecipeModel
            }
        case REMOVE_STEP:
            return{
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: [...state.recipe?.steps?.filter((item, index) => index !== payload) ?? []]
                } as RecipeModel
            }
        default:
            return state;
    }
};

export default recipeReducer;