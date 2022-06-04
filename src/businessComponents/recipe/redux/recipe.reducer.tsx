import RecipeModel from "../../../models/RecipeModel";
import {
    ADD_RECIPE_STEP,
    SET_RECIPE,
    REMOVE_RECIPE_STEP,
    UPDATE_RECIPE_STEP,
    SET_RECIPE_EDIT_MODE,
    SET_RECIPE_IS_LOADING,
    SET_NEWRECIPE,
} from "../../../redux/actionTypes";

export class RecipeReducerState {
    recipe?: RecipeModel;
    recipes?: Array<RecipeModel>;
    createdRecipe?: RecipeModel;
    editMode?: boolean = false;
    isLoading?: boolean = false;
    sortedBy?: string;
}

export const initialState = new RecipeReducerState();

const recipeReducer = (state: RecipeReducerState = initialState, action: any): RecipeReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_RECIPE:
            return {
                ...state,
                recipe: payload,
            };
        case ADD_RECIPE_STEP:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: [...(state.recipe?.steps ?? []), payload],
                } as RecipeModel,
            };
        case UPDATE_RECIPE_STEP:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: state.recipe?.steps?.map?.((item, index) => {
                        return index === payload.index ? payload.value : item;
                    }),
                } as RecipeModel,
            };
        case REMOVE_RECIPE_STEP:
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    steps: [...(state.recipe?.steps?.filter((item, index) => index !== payload) ?? [])],
                } as RecipeModel,
            };
        case SET_RECIPE_EDIT_MODE:
            return {
                ...state,
                editMode: payload,
            };
        case SET_RECIPE_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        case SET_NEWRECIPE: {
            return {
                ...state,
                createdRecipe: payload,
            };
        }
        default:
            return state;
    }
};

export default recipeReducer;
