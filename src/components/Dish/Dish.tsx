import { useState } from "react";
import DishModel from "../../models/DishModel";
import Ingreadient from "../../models/IngreadientModel";
import { ButtonStyle } from "../ui/buttons/button/Button";
import IconButton from "../ui/buttons/iconButton/IconButton";
import { AnimationEnum } from "../ui/constants/Constants";
import Card, { CardColors, CardShape } from "../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../ui/containers/flexes/Flex";
import Icon, { IconImage } from "../ui/icons/Icon";
import Label, { LabelSize } from "../ui/labels/label/Label";
import { SimpleList, StringList } from "../ui/lists/SimpleList/SimpleList";

const Dish = (props: DishProps) => {
    const [editMode, setEditMode] = useState(false);
    const dish = props.dish

    const onEditClickHandler = () => {
        setEditMode(true);
    };

    const onCancelClickHandler = () => {
        setEditMode(false);
        props.onCancel?.();
    };

    const onSaveClickHandler = () => {
        setEditMode(false);
    };

    const onStepListUpdated = (updatedSteps: Array<string>) => {
        const newDish = { ...dish };
        if (!newDish.recipe) {
            return;
        }
        newDish.recipe.steps = updatedSteps;
    };

    const onIngreadientListUpdated = (updateIngredients: Array<Ingreadient>) => {
        const newDish = { ...dish };
        if (!newDish.recipe) {
            return;
        }
        newDish.recipe.ingreadients = updateIngredients;
    };

    const onEditStepHandler = (index: number) => {
        if (!dish?.recipe) {
            return;
        }
        console.log(dish.recipe.steps?.[index]);
    };

    const onEditIngreadientHandler = (index: number) => {
        if (!dish?.recipe) {
            return;
        }
        console.log(dish.recipe.ingreadients?.[index]);
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

    if (!dish) {
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
                        {dish.recipe?.title ?? ""}
                    </Label>
                    {!editMode && (
                        <IconButton
                            onClick={onEditClickHandler}
                            style={ButtonStyle.transparent}
                            image={IconImage.edit}
                        />
                    )}
                </Flex>
                <Label size={LabelSize.medium}>{dish.recipe?.description ?? ""}</Label>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                    <StringList
                        title="Steps"
                        items={dish.recipe?.steps}
                        isDisabled={!editMode}
                        onRowEditClick={onEditStepHandler}
                        onListUpdated={onStepListUpdated}
                        onRowClick={onEditStepHandler}
                    />
                    <SimpleList
                        title="Ingreadients"
                        items={dish.recipe?.ingreadients}
                        isDisabled={!editMode}
                        itemToString={(item) => `${item?.name}: ${item?.amount}`}
                        createNewItem={newIngreadientCreatedHandler}
                        onListUpdated={onIngreadientListUpdated}
                        onRowEditClick={onEditIngreadientHandler}
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

type DishProps = {
    dish?: DishModel;
    onSave?: () => void;
    onCancel?: () => void;
};

export default Dish;
