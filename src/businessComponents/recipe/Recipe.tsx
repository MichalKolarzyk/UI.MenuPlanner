import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Ingreadient from "../../models/IngreadientModel";
import RecipeModel from "../../models/RecipeModel";
import { AppDispatch, RootState } from "../../redux";
import {
    addRecipeTag,
    addStep,
    deleteRecipe,
    fetchRecipe,
    patchRecipe,
    removeRecipeTag,
    removeStep,
    setRecipeDeletedSuccesfully,
    setRecipeMode,
} from "./redux/recipeActions";
import { ButtonStyle } from "../../ui/buttons/button/Button";
import IconButton from "../../ui/buttons/iconButton/IconButton";
import { AnimationEnum, ColorEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import Icon, { IconImage } from "../../ui/icons/Icon";
import Label, { LabelSize } from "../../ui/labels/label/Label";
import { SimpleList, StringList } from "../../ui/lists/SimpleList/SimpleList";
import { RecipeReducerModes } from "./redux/recipe.reducer";
import Multiselect from "../../ui/lists/multiselect/Multiselect";
import { TagModel } from "../../api/models";
import { fetchTags } from "../recipes/redux/recipesActions";

const Recipe = () => {
    const navigator = useNavigate();
    const { recipeId } = useParams();
    const recipe = useSelector<RootState, RecipeModel | undefined>((state) => state.recipe.recipe);
    const mode = useSelector<RootState, RecipeReducerModes | undefined>((state) => state.recipe.mode);
    const deletedSuccesfully = useSelector<RootState, boolean | undefined>((state) => state.recipe.deletedSuccesfully);
    const tags = useSelector<RootState, Array<TagModel> | undefined>((state) => state.recipes.tags);
    const dispach = useDispatch<AppDispatch>();

    useEffect(() => {
        dispach(fetchRecipe(recipeId));
        dispach(setRecipeMode(RecipeReducerModes.default));
    }, [dispach, recipeId]);

    useEffect(() => {
        dispach(setRecipeDeletedSuccesfully(false));
        dispach(fetchTags());
    }, [])

    const onEditClickHandler = () => {
        dispach(setRecipeMode(RecipeReducerModes.edit));
    };

    const onCancelClickHandler = () => {
        dispach(fetchRecipe(recipeId));
        dispach(setRecipeMode(RecipeReducerModes.default));
    };

    const submitClickHandler = () => {
        console.log(recipe);
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

    const editStepHandler = (index: number) => {
        if (!recipe) {
            return;
        }
        navigator(`step/${index}`);
    };

    const onEditIngreadientHandler = (index: number) => {
        if (!recipe) {
            return;
        }
        console.log(recipe.ingreadients?.[index]);
    };

    const tagClickHandler = (key: string, selected: boolean) => {
        if(selected){
            dispach(addRecipeTag(key))
        }else{
            dispach(removeRecipeTag(key));
        }
    }

    const newIngreadientCreatedHandler = (itemAsStr: string) => {
        let ingreadient: Ingreadient = {
            amount: 1,
            name: itemAsStr,
        };

        if (itemAsStr.includes(":")) {
            const elements = itemAsStr.split(":");
            if (elements.length === 2 && !isNaN(Number(elements[1]))) {
                ingreadient.name = elements[0].trim();
                ingreadient.amount = Number(elements[1].trim());
            }
        }
        return ingreadient;
    };

    const addNewStepHandler = (itemStr: string) => {
        dispach(addStep(itemStr));
    };

    const deleteStepHandler = (index: number) => {
        dispach(removeStep(index));
    };

    const deleteModeClickHandler = () => {
        dispach(setRecipeMode(RecipeReducerModes.delete));
    };

    if (!recipe) {
        return (
            <Flex justify={FlexJustify.center}>
                <Icon image={IconImage.spin} animation={AnimationEnum.spin} />
            </Flex>
        );
    }

    if (deletedSuccesfully) {
        return (
            <Card padding={PaddingEnum.paddingOne}>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                    <Label bold size={LabelSize.medium} color={ColorEnum.green}>
                        Recipe deleted succesfully
                    </Label>
                    <Flex>
                        <IconButton onClick={recipesClickHandler} text="Recipes" />
                    </Flex>
                </Flex>
            </Card>
        );
    }

    return (
        <Card padding={PaddingEnum.paddingOne}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                <Outlet />
                <Flex justify={FlexJustify.spaceBetween}>
                    <Label bold={true} size={LabelSize.large}>
                        {recipe?.title ?? ""}
                    </Label>
                    {mode === RecipeReducerModes.default && (
                        <Flex>
                            <IconButton
                                onClick={onEditClickHandler}
                                style={ButtonStyle.transparent}
                                image={IconImage.edit}
                            />
                            <IconButton
                                onClick={deleteModeClickHandler}
                                style={ButtonStyle.transparent}
                                image={IconImage.remove}
                            />
                        </Flex>
                    )}
                </Flex>
                <Label size={LabelSize.medium}>{recipe?.description ?? ""}</Label>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                    <StringList
                        title="Steps"
                        items={recipe?.steps}
                        isDisabled={mode !== RecipeReducerModes.edit}
                        onEditClick={editStepHandler}
                        onAddNewItem={addNewStepHandler}
                        onDeleteClick={deleteStepHandler}
                        onRowClick={editStepHandler}
                    />
                    <SimpleList
                        title="Ingreadients"
                        items={recipe?.ingreadients}
                        isDisabled={mode !== RecipeReducerModes.edit}
                        itemToString={(item) => `${item?.name}: ${item?.amount}`}
                        onAddNewItem={newIngreadientCreatedHandler}
                        onEditClick={onEditIngreadientHandler}
                    />
                    <Multiselect
                        isDisabled={mode !== RecipeReducerModes.edit}
                        items={tags}
                        itemToString={(t: TagModel) => t.name || " "}
                        itemKey={(t: TagModel) => t.id}
                        seletedKeys={recipe.tagIds}
                        title="Tags"
                        onItemClick={tagClickHandler}
                    />
                </Flex>
                {mode === RecipeReducerModes.edit && (
                    <Flex justify={FlexJustify.spaceBetween}>
                        <IconButton
                            image={IconImage.save}
                            style={ButtonStyle.accept}
                            onClick={submitClickHandler}
                            text="Submit"
                        />
                        <IconButton
                            image={IconImage.close}
                            style={ButtonStyle.cancel}
                            onClick={onCancelClickHandler}
                            text="Cancel"
                        />
                    </Flex>
                )}
                {mode === RecipeReducerModes.delete && (
                    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                        <Label bold size={LabelSize.medium} color={ColorEnum.red}>
                            Czy na pewno chcesz usunąć przepis?
                        </Label>
                        <Flex justify={FlexJustify.spaceBetween}>
                            <IconButton
                                image={IconImage.remove}
                                style={ButtonStyle.cancel}
                                onClick={deleteClickHandler}
                                text="Delete"
                            />
                            <IconButton
                                image={IconImage.close}
                                style={ButtonStyle.cancel}
                                onClick={onCancelClickHandler}
                                text="Cancel"
                            />
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Card>
    );
};


export default Recipe;
