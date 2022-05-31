import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ingreadient from "../../models/IngreadientModel";
import RecipeModel from "../../models/RecipeModel";
import { AppDispatch, RootState } from "../../redux";
import { addStep, fetchRecipe, removeStep } from "../../redux/actions/recipeActions";
import { ButtonStyle } from "../ui/buttons/button/Button";
import IconButton from "../ui/buttons/iconButton/IconButton";
import { AnimationEnum } from "../ui/constants/Constants";
import Card, { CardColors, CardShape } from "../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../ui/containers/flexes/Flex";
import Icon, { IconImage } from "../ui/icons/Icon";
import Label, { LabelSize } from "../ui/labels/label/Label";
import { SimpleList, StringList } from "../ui/lists/SimpleList/SimpleList";

const Recipe = (props: RecipeProps) => {
    const [editMode, setEditMode] = useState(false);
    const recipe = useSelector<RootState, RecipeModel | undefined>((state) => state.recipe.recipe);
    const dispach = useDispatch<AppDispatch>();
    const recipeId = props.recipeId

    useEffect(() => {
        dispach(fetchRecipe(recipeId));
    }, [dispach]);


    const onEditClickHandler = () => {
        setEditMode(true);
    };

    const onCancelClickHandler = () => {
        dispach(fetchRecipe(recipeId));
        setEditMode(false);
    };

    const onSaveClickHandler = () => {
        setEditMode(false);
    };

    const editStepHandler = (index: number) => {
        if (!recipe) {
            return;
        }
        console.log(recipe.steps?.[index]);
    };

    const onEditIngreadientHandler = (index: number) => {
        if (!recipe) {
            return;
        }
        console.log(recipe.ingreadients?.[index]);
    };

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
    }

    const deleteStepHandler = (index: number) => {
        dispach(removeStep(index))
    }

    if (!recipe) {
        return (
            <Card shape={CardShape.sharp} color={CardColors.white}>
                <Flex justify={FlexJustify.center}>
                    <Icon image={IconImage.spin} animation={AnimationEnum.spin} />
                </Flex>
            </Card>
        );
    }

    return (
        <Card shape={CardShape.sharp} color={CardColors.white}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                <Flex justify={FlexJustify.spaceBetween}>
                    <Label bold={true} size={LabelSize.large}>
                        {recipe?.title ?? ""}
                    </Label>
                    {!editMode && (
                        <IconButton
                            onClick={onEditClickHandler}
                            style={ButtonStyle.transparent}
                            image={IconImage.edit}
                        />
                    )}
                </Flex>
                <Label size={LabelSize.medium}>{recipe?.description ?? ""}</Label>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                    <StringList
                        title="Steps"
                        items={recipe?.steps}
                        isDisabled={!editMode}
                        onEditClick={editStepHandler}
                        onAddNewItem={addNewStepHandler}
                        onDeleteClick={deleteStepHandler}
                        onRowClick={editStepHandler}
                    />
                    <SimpleList
                        title="Ingreadients"
                        items={recipe?.ingreadients}
                        isDisabled={!editMode}
                        itemToString={(item) => `${item?.name}: ${item?.amount}`}
                        onAddNewItem={newIngreadientCreatedHandler}
                        onEditClick={onEditIngreadientHandler}
                    />
                </Flex>
                {editMode && (
                    <Flex justify={FlexJustify.spaceBetween}>
                        <IconButton
                            image={IconImage.save}
                            style={ButtonStyle.accept}
                            onClick={onSaveClickHandler}
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
            </Flex>
        </Card>
    );
};

type RecipeProps = {
    recipeId?: string;
};

export default Recipe;
