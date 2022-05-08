import { useState } from "react";
import DishModel from "../../models/DishModel";
import EditButton from "../ui/buttons/EditButton";
import SimpleList from "../ui/lists/SimpleList/SimpleList";
import classes from "./Dish.module.css";

const Dish = (props: DishProps) => {
    const [editMode, setEditMode] = useState(false);
    const [dish, setDish] = useState(props.dish);

    const changeEditModeHandler = () => {
        setEditMode(!editMode);
    };

    const onStepListUpdated = (updatedSteps: Array<string>) => {
        const newDish = {...dish}
        newDish.recipe.steps = updatedSteps;
        setDish(newDish);
    }

    return (
        <div>
            <div className={classes.header}>
                <h2>{dish.name}</h2>
                <EditButton editMode={editMode} onClick={changeEditModeHandler} />
            </div>
            <p>{dish.discription}</p>
            <div className={classes.container}>
                <SimpleList listUpdated={onStepListUpdated} title="Steps" items={dish.recipe.steps} />
                <SimpleList title="Ingreadients" items={dish.recipe.ingreadients?.map((i) => `${i.name}: ${i.amount}`)} />
            </div>
        </div>
    );
};

type DishProps = {
    dish: DishModel;
};

export default Dish;
