import { useState } from "react";
import DishModel from "../../models/DishModel";
import Ingreadient from "../../models/IngreadientModel";
import { ButtonShape, ButtonStyle } from "../ui/buttons/button/Button";
import IconButton from "../ui/buttons/iconButton/IconButton";
import Card, { CardColors, CardShape } from "../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../ui/containers/flexes/Flex";
import { IconImage } from "../ui/icons/Icon";
import Label, { LabelSize } from "../ui/labels/label/Label";
import { SimpleList, StringList } from "../ui/lists/SimpleList/SimpleList";

const Dish = (props: DishProps) => {
    const [editMode, setEditMode] = useState(false);
    const [dishBeforeEdit, setDishBeforeEdit] = useState(props.dish);
    const [dish, setDish] = useState(props.dish);

    const onEditClickHandler = () => {
        setEditMode(true);
        setDishBeforeEdit({ ...dish });
        console.log(dishBeforeEdit);
    };

    const onCancelClickHandler = () => {
        console.log(dishBeforeEdit);
        setEditMode(false);
        setDish(dish);
    };

    const onSaveClickHandler = () => {
        setEditMode(false);
        setDishBeforeEdit({ ...dish });
    };

    const onStepListUpdated = (updatedSteps: Array<string>) => {
        const newDish = { ...dish };
        if(!newDish.recipe){
            return;
        }
        newDish.recipe.steps = updatedSteps;
        setDish(newDish);
    };

    const onIngreadientListUpdated = (updateIngredients: Array<Ingreadient>) => {
        const newDish = { ...dish };
        if(!newDish.recipe){
            return;
        }
        newDish.recipe.ingreadients = updateIngredients;
        setDish(newDish);
    };

    const onEditStepHandler = (index: number) => {
        if(!dish.recipe){
            return;
        }
        console.log(dish.recipe.steps?.[index]);
    };

    const onEditIngreadientHandler = (index: number) => {
        if(!dish.recipe){
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

    return (
        <Card shape={CardShape.sharp} color={CardColors.white}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                <Flex justify={FlexJustify.spaceBetween}>
                    <Label bold={true} size={LabelSize.large}>
                        {dish.recipe?.title ?? ""}
                    </Label>
                    {!editMode && <IconButton onClick={onEditClickHandler} style={ButtonStyle.transparent} image={IconImage.edit}/>}
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
                {editMode && <Flex justify={FlexJustify.spaceBetween}>
                    <IconButton image={IconImage.save} style={ButtonStyle.accept} onClick={onSaveClickHandler} text="Submit"/>
                    <IconButton image={IconImage.close} style={ButtonStyle.cancel} onClick={onCancelClickHandler} text="Cancel"/>
                </Flex>}
            </Flex>
        </Card>
    );
};

type DishProps = {
    dish: DishModel;
    onSave?: () => {};
    onCancel?: () => {};
};

export default Dish;
