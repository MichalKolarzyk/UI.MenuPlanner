import { ChangeEvent, MouseEventHandler, useState } from "react";
import DishModel from "../models/DishModel";
import EditButton from "../ui/buttons/EditButton";
import classes from "./Dish.module.css";
import Ingreadients from "./Ingreadients";
import Steps from "./Steps";

const Dish = (props: DishProps) => {
    const [editMode, setEditMode] = useState(false);

    const changeEditModeHandler = () => {
        setEditMode(!editMode);
    }


    const dish = props.dish;
    const recipe = dish.recipe;
    return (
        <div>
            <div className={classes.header}>
                <h2>{dish.name}</h2>
                <EditButton editMode={editMode} onClick={changeEditModeHandler}/>
            </div>
            <p>{dish.discription}</p>
            <Steps steps={recipe.steps} editMode={editMode} />
            <Ingreadients ingreadients={recipe.ingreadients} editMode={editMode} />
        </div>
    );
};

type DishProps = {
    dish: DishModel;
};

export default Dish;
