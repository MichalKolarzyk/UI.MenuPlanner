import { useState } from "react";
import DishModel from "../../models/DishModel";
import EditButton from "../ui/buttons/EditButton";
import SimpleList from "../ui/lists/SimpleList/SimpleList";
import classes from "./Dish.module.css";

const Dish = (props: DishProps) => {
    const [editMode, setEditMode] = useState(false);
    const [dishBeforeEdit, setDishBeforeEdit] = useState(props.dish); 
    const [dish, setDish] = useState(props.dish);

    const onEditClickHandler = () => {
        setEditMode(true);
        setDishBeforeEdit({...dish});
        console.log(dishBeforeEdit);
    };

    const onCancelEditHandler = () =>{
        console.log(dishBeforeEdit);
        setEditMode(false);
        setDish(dish);
    }

    const onSaveClickHandler = () =>{
        setEditMode(false);
        setDishBeforeEdit({...dish});
    }

    const onStepListUpdated = (updatedSteps: Array<string>) => {
        const newDish = {...dish}
        newDish.recipe.steps = updatedSteps;
        setDish(newDish);
    }

    const onEditStepHandler = (index: number) => {
        console.log(dish.recipe.steps?.[index])
    }

    const onEditIngreadientHandler = (index: number) => {
        console.log(dish.recipe.ingreadients?.[index]);
    }

    return (
        <div>
            <div className={classes.header}>
                <h2>{dish.name}</h2>
                <EditButton editMode={editMode} onSaveClick={onSaveClickHandler} onCancelClick={onCancelEditHandler} onEditClick={onEditClickHandler} />
            </div>
            <p>{dish.discription}</p>
            <div className={classes.container}>
                <SimpleList onEditClick={onEditStepHandler} listUpdated={onStepListUpdated} title="Steps" items={dish.recipe.steps} />
                <SimpleList onEditClick={onEditIngreadientHandler} title="Ingreadients" items={dish.recipe.ingreadients?.map((i) => `${i.name}: ${i.amount}`)} />
            </div>
        </div>
    );
};

type DishProps = {
    dish: DishModel;
};

export default Dish;
