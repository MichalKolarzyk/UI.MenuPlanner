import { ChangeEvent, useState } from "react";
import classes from "./SimpleList.module.css";
import { FaPlus, FaEdit, FaRegTimesCircle, FaTrashAlt } from "react-icons/fa";

const SimpleList = (props: SimpleListProps) => {
    const [addingMode, setAddingMode] = useState(false);
    const [items, setItems] = useState(props.items === undefined ? new Array<string>() : props.items);
    const [newItem, setNewItem] = useState("");

    const addButtonClickHandler = () => {
        setAddingMode(true);
    };

    const closeButtonClickHandler = () => {
        setAddingMode(false);
    };

    const onTrashClickHandler = (index: number) => {
        const newItems = items.filter((item, i) => i != index);
        setItems(newItems);
        props.listUpdated?.(newItems);
    };

    const onEditClickHandler = (index: number) => {
        props.onEditClick?.(index);
    };

    const onAddElementHandler = () => {
        if (newItem !== null && newItem !== "") {
            const newItems = [...items, newItem];
            setItems(newItems);
            props.listUpdated?.(newItems);
        }
        setNewItem("");
        setAddingMode(false);
    };

    const onNewInputChangeHandler = (current: ChangeEvent<HTMLInputElement>) => {
        setNewItem(current.target.value);
    };

    const itemView = items?.map((item, index) => (
        <SimpleRow
            key={index}
            onEditClick={onEditClickHandler}
            onTrashClick={onTrashClickHandler}
            item={item}
            index={index}
        />
    ));

    return (
        <div className={classes.card}>
            <div className={classes.title}>{props.title}</div>
            <ul className={classes.list}>{itemView}</ul>
            {!addingMode && (
                <button onClick={addButtonClickHandler} className={classes.addButton}>
                    <FaPlus />
                    <span>Add</span>
                </button>
            )}
            {addingMode && (
                <div>
                    <input value={newItem} onChange={onNewInputChangeHandler} className={classes.newItemInput} />
                    <div className={classes.addElementContainer}>
                        <button className={classes.addElementButton} onClick={onAddElementHandler}>
                            Add element
                        </button>
                        <FaRegTimesCircle
                            className={classes.cancelAddElementButton}
                            onClick={closeButtonClickHandler}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const SimpleRow = (props: SimpleRowProps) => {
    const [isHover, setIsHover] = useState(false);

    const onTrashClickHandler = () => {
        props.onTrashClick?.(props.index);
    };

    const onEditClickHandler = () => {
        props.onEditClick?.(props.index);
    };

    return (
        <li className={classes.row} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div>{props.item}</div>
            <div>
                <FaEdit
                    onClick={onEditClickHandler}
                    className={isHover ? classes.editIcon : classes.editIconNotVisible}
                />
                <FaTrashAlt
                    onClick={onTrashClickHandler}
                    className={isHover ? classes.editIcon : classes.editIconNotVisible}
                />
            </div>
        </li>
    );
};

type SimpleListProps = {
    title: string;
    items?: Array<string>;
    isEditMode?: boolean;
    listUpdated?: (items: Array<string>) => void;
    onEditClick?: (index: number) => void;
};

type SimpleRowProps = {
    item: string;
    index: number;
    onTrashClick?: (index: number) => void;
    onEditClick?: (index: number) => void;
};

export default SimpleList;
