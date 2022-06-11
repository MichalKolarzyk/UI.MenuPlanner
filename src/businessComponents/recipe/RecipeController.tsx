import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TagModel } from "../../api/models";
import RecipeModel from "../../models/RecipeModel";
import { RootState, AppDispatch } from "../../redux";
import { fetchTags } from "../recipes/redux/recipesActions";
import Recipe from "./Recipe"
import { RecipeReducerModes } from "./redux/recipe.reducer";
import { addRecipeTag, addStep, deleteRecipe, fetchRecipe, patchRecipe, removeRecipeTag, removeStep, setRecipeDeletedSuccesfully, setRecipeMode, setRecipeSubmitedSuccesfully } from "./redux/recipeActions";

const RecipeController = () => {
    const navigator = useNavigate();
    const { recipeId } = useParams();
    const recipe = useSelector<RootState, RecipeModel | undefined>((state) => state.recipe.recipe);
    const mode = useSelector<RootState, RecipeReducerModes | undefined>((state) => state.recipe.mode);
    const deletedSuccesfully = useSelector<RootState, boolean | undefined>((state) => state.recipe.deletedSuccesfully);
    const submitedSuccesfully = useSelector<RootState, boolean | undefined>((state) => state.recipe.submitedSuccesfully);
    const isLoading = useSelector<RootState, boolean | undefined>((state) => state.recipe.isLoading);
    const tags = useSelector<RootState, Array<TagModel> | undefined>((state) => state.recipes.tags);
    const dispach = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispach(setRecipeSubmitedSuccesfully(false))
        dispach(setRecipeDeletedSuccesfully(false));
        dispach(fetchTags());
    }, [])

    useEffect(() => {
        if(!submitedSuccesfully){
            return;
        }
        dispach(setRecipeMode(RecipeReducerModes.default));
    }, [submitedSuccesfully]);

    useEffect(() => {
        dispach(fetchRecipe(recipeId));
    }, [dispach, recipeId]);

    const editClickHandler = () => {
        dispach(setRecipeMode(RecipeReducerModes.edit));
    };

    const cancelClickHandler = () => {
        dispach(fetchRecipe(recipeId));
        dispach(setRecipeMode(RecipeReducerModes.default));
    };

    const submitClickHandler = () => {
        dispach(patchRecipe(recipe));
        dispach(setRecipeMode(RecipeReducerModes.default));
    };

    const deleteClickHandler = () => {
        dispach(deleteRecipe(recipeId));
        dispach(setRecipeDeletedSuccesfully(true));
    };

    const recipesClickHandler = () => {
        navigator("../recipes");
    }

    const editStepClickHandler = (index?: number) => {
        if (!recipe || index === null) {
            return;
        }
        navigator(`step/${index}`);
    };

    const tagClickHandler = (key: string, selected: boolean) => {
        if(selected){
            dispach(addRecipeTag(key))
        }else{
            dispach(removeRecipeTag(key));
        }
    }

    const addNewStepHandler = (itemStr: string) => {
        dispach(addStep(itemStr));
    };

    const deleteStepHandler = (index?: number) => {
        if(index === null || index === undefined){
            return;
        }
        dispach(removeStep(index));
    };

    const deleteModeClickHandler = () => {
        dispach(setRecipeMode(RecipeReducerModes.delete));
    };

    return <Recipe
        deletedSuccesfully={deletedSuccesfully}
        recipeMode={mode}
        tags={tags}
        recipe={recipe}
        onAddNewStepClick={addNewStepHandler}
        onCancelClick={cancelClickHandler}
        onDeleteClick={deleteClickHandler}
        onDeleteModeClick={deleteModeClickHandler}
        onDeleteStep={deleteStepHandler}
        onEditClick={editClickHandler}
        onEditStepClick={editStepClickHandler}
        onRecipesClick={recipesClickHandler}
        onSubmitClick={submitClickHandler}
        onTagClick={tagClickHandler}
        isLoading={isLoading}
    />
}

export default RecipeController