import { ErrorModel, RecipeModel } from "../../../api/models";
import { SET_NEWRECIPE, SET_NEWRECIPE_CREATED_SUCCESFULLY } from "../../../redux/actionTypes";

export class NewRecipeReducerState {
    createdSuccesfully?: boolean;
    newRecipe?: RecipeModel
    error?: ErrorModel
}

export const initialState = new NewRecipeReducerState();

const newRecipeReducer = (state: NewRecipeReducerState = initialState, action: any): NewRecipeReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_NEWRECIPE:
            return {
                ...state,
                newRecipe: payload,
            };
        case SET_NEWRECIPE_CREATED_SUCCESFULLY:
            return {
                ...state,
                createdSuccesfully: payload,
            };
        default:
            return state;
    }
};

export default newRecipeReducer;
