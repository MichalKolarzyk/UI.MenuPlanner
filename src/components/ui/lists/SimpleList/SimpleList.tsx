import { ChangeEvent, useState } from "react";
import classes from "./SimpleList.module.css";
import { FaPlus, FaEdit, FaRegTimesCircle, FaTrashAlt } from "react-icons/fa";

const SimpleList = <T,>(props: SimpleListProps<T>) => {
    const [addingMode, setAddingMode] = useState(false);
    const [items, setItems] = useState(props.items === undefined ? new Array<T>() : props.items);
    const [newItemStr, setNewItemStr] = useState("");

    const addButtonClickHandler = () => {
        setAddingMode(true);
    };

    const closeButtonClickHandler = () => {
        setAddingMode(false);
    };

    const onTrashClickHandler = (index: number) => {
        const newItems = items.filter((item, i) => i != index);
        setItems(newItems);
        props.onListUpdated?.(newItems);
    };

    const onEditClickHandler = (index: number) => {
        props.onEditClick?.(index);
    };

    const onAddElementHandler = () => {
        if (newItemStr !== null && newItemStr !== "") {
            const newItem = props.createNewItem(newItemStr);
            const newItems = [...items, newItem];
            setItems(newItems);
            props.onListUpdated?.(newItems);
        }
        setNewItemStr("");
        setAddingMode(false);
    };

    const onNewInputChangeHandler = (current: ChangeEvent<HTMLInputElement>) => {
        setNewItemStr(current.target.value);
    };

    const itemView = items?.map((item, index) => (
        <SimpleRow
            key={index}
            itemAsString={props.itemToString(item)}
            onEditClick={onEditClickHandler}
            onTrashClick={onTrashClickHandler}
            item={item}
            index={index}
            isDisabled={props.isDisabled}
        />
    ));

    return (
        <div className={classes.card}>
            <div className={classes.title}>{props.title}</div>
            <ul className={classes.list}>{itemView}</ul>
            {!props.isDisabled && !addingMode && (
                <button onClick={addButtonClickHandler} className={classes.addButton}>
                    <FaPlus />
                    <span>Add</span>
                </button>
            )}
            {!props.isDisabled && addingMode && (
                <div>
                    <input value={newItemStr} onChange={onNewInputChangeHandler} className={classes.newItemInput} />
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

const SimpleRow = <T,>(props: SimpleRowProps<T>) => {
    const [isHover, setIsHover] = useState(false);

    const onTrashClickHandler = () => {
        props.onTrashClick?.(props.index);
    };

    const onEditClickHandler = () => {
        props.onEditClick?.(props.index);
    };

    return (
        <li className={classes.row} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div>{props.itemAsString}</div>
            {!props.isDisabled && (
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
            )}
        </li>
    );
};

export const StringList = (props: StringListProps) => {
    return (
        <SimpleList
            itemToString={(item: string) => item}
            createNewItem={(item: string) => item}
            title={props.title}
            isDisabled={props.isDisabled}
            isEditMode={props.isEditMode}
            items={props.items}
            onListUpdated={props.onListUpdated}
            onEditClick={props.onEditClick}
        />
    );
};
type StringListProps = {
    title: string;
    items?: Array<string>;
    isEditMode?: boolean;
    isDisabled?: boolean;
    onListUpdated?: (items: Array<string>) => void;
    onEditClick?: (index: number) => void;
};

type SimpleListProps<T> = {
    title: string;
    items?: Array<T>;
    isEditMode?: boolean;
    isDisabled?: boolean;
    itemToString: (item: T) => string;
    createNewItem: (itemAsStr: string) => T;
    onListUpdated?: (items: Array<T>) => void;
    onEditClick?: (index: number) => void;
};

type SimpleRowProps<T> = {
    item: T;
    itemAsString: string;
    index: number;
    isDisabled?: boolean;
    onTrashClick?: (index: number) => void;
    onEditClick?: (index: number) => void;
};

export default SimpleList;
