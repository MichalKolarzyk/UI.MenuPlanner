import { useState } from "react";
import DishModel from "../../models/DishModel";
import Ingreadient from "../../models/IngreadientModel";
import EditButton from "../ui/buttons/EditButton";
import { SimpleList, StringList } from "../ui/lists/SimpleList/SimpleList";
import classes from "./Dish.module.css";

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
        newDish.recipe.steps = updatedSteps;
        setDish(newDish);
    };

    const onIngreadientListUpdated = (updateIngredients: Array<Ingreadient>) => {
        const newDish = { ...dish };
        newDish.recipe.ingreadients = updateIngredients;
        setDish(newDish);
    };

    const onEditStepHandler = (index: number) => {
        console.log(dish.recipe.steps?.[index]);
    };

    const onEditIngreadientHandler = (index: number) => {
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
        <div>
            <div className={classes.header}>
                <h2>{dish.name}</h2>
                <EditButton
                    editMode={editMode}
                    onSaveClick={onSaveClickHandler}
                    onCancelClick={onCancelClickHandler}
                    onEditClick={onEditClickHandler}
                />
            </div>
            <p>{dish.discription}</p>
            <div className={classes.container}>
                <StringList
                    title="Steps"
                    items={dish.recipe.steps}
                    isDisabled={!editMode}
                    onRowEditClick={onEditStepHandler}
                    onListUpdated={onStepListUpdated}
                    onRowClick={onEditStepHandler}
                />
                <SimpleList
                    title="Ingreadients"
                    items={dish.recipe.ingreadients}
                    isDisabled={!editMode}
                    itemToString={(item) => `${item?.name}: ${item?.amount}`}
                    createNewItem={newIngreadientCreatedHandler}
                    onListUpdated={onIngreadientListUpdated}
                    onRowEditClick={onEditIngreadientHandler}
                />
            </div>
        </div>
    );
};

type DishProps = {
    dish: DishModel;
    onSave?: () => {},
    onCancel?: () => {},
};

export default Dish;
