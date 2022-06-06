import RecipeModel from "../../../models/RecipeModel";
import {
    SET_RECIPE,
    ADD_RECIPE_STEP,
    REMOVE_RECIPE_STEP,
    UPDATE_RECIPE_STEP,
    ADD_RECIPE_TAG,
    REMOVE_RECIPE_TAG,
    SET_RECIPE_IS_LOADING,
    SET_RECIPE_SUBMITED_SUCCESFULLY,
    SET_RECIPE_DELETED_SUCCESFULLY,
    SET_NEWRECIPE,
    SET_RECIPE_MODE,
} from "../../../redux/actionTypes";

export class RecipeReducerState {
    recipe?: RecipeModel;
    createdRecipe?: RecipeModel;
    mode?: RecipeReducerModes;
    isLoading?: boolean = false;
    deletedSuccesfully?: boolean = false;
    submitedSuccesfully?: boolean = false;
    sortedBy?: string;
}

export enum RecipeReducerModes {
    default="default",
    edit= "edit",
    delete="delete",
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
        case SET_RECIPE_MODE:
            return {
                ...state,
                mode: payload,
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
        case SET_RECIPE_DELETED_SUCCESFULLY: {
            return {
                ...state,
                deletedSuccesfully: payload,
            };
        }
        case ADD_RECIPE_TAG: {
            return{
                ...state,
                recipe: {
                    ...state.recipe,
                    tagIds: [...(state.recipe?.tagIds ?? []), payload],
                } as RecipeModel,
            }
        }
        case REMOVE_RECIPE_TAG:{
            return {
                ...state,
                recipe: {
                    ...state.recipe,
                    tagIds: [...(state.recipe?.tagIds?.filter((item) => item !== payload) ?? [])],
                } as RecipeModel,
            };
        }
        case SET_RECIPE_SUBMITED_SUCCESFULLY: {
            return{
                ...state,
                submitedSuccesfully: payload
            }
        }
        default:
            return state;
    }
};

export default recipeReducer;
