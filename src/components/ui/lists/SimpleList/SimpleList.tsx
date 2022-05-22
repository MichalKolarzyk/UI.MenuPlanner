import { ChangeEvent, useState } from "react";
import Card, { CardColors, CardShape } from "../../containers/cards/card/Card";
import Label, { LabelSize } from "../../labels/label/Label";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import IconButton, { IconButtonSize } from "../../buttons/iconButton/IconButton";
import { IconImage } from "../../icons/Icon";
import Input from "../../inputs/input/Input";
import Button, { ButtonPadding, ButtonShape, ButtonStyle } from "../../buttons/button/Button";

export const SimpleList = <T,>(props: SimpleListProps<T>) => {
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
        props.onRowEditClick?.(index);
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
            onClick={props.onRowClick}
        />
    ));

    return (
        <Card shape={CardShape.sharp} color={CardColors.grey}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                <Label bold={true} size={LabelSize.large}>
                    {props.title}
                </Label>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                    {itemView}
                </Flex>
                {!(props.isDisabled ?? true) && !addingMode && (
                    <IconButton
                        padding={ButtonPadding.paddingHalf}
                        image={IconImage.add}
                        text="Add"
                        onClick={addButtonClickHandler}
                    />
                )}

                {!(props.isDisabled ?? true) && addingMode && (
                    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignLeft}>
                        <Input value={newItemStr} onChange={onNewInputChangeHandler} />
                        <Flex>
                            <Button onClick={onAddElementHandler}>
                                Add element
                            </Button>
                            <IconButton
                                shape={ButtonShape.roundedCorners}
                                style={ButtonStyle.cancel}
                                image={IconImage.close}
                                onClick={closeButtonClickHandler}
                            />
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Card>
    );
};

const SimpleRow = <T,>(props: SimpleRowProps<T>) => {
    const onTrashClickHandler = (x: React.MouseEvent<SVGElement, MouseEvent>) => {
        x.stopPropagation();
        props.onTrashClick?.(props.index);
    };

    const onEditClickHandler = (x: React.MouseEvent<SVGElement, MouseEvent>) => {
        x.stopPropagation();
        props.onEditClick?.(props.index);
    };

    const onClickHandler = () => {
        props.onClick?.(props.index);
    };

    return (
        <Button shape={ButtonShape.roundedCorners} style={ButtonStyle.grey} onClick={onClickHandler}>
            <Flex justify={FlexJustify.spaceBetween}>
                <Label>{props.itemAsString}</Label>
                {!props.isDisabled && (
                    <Flex gapSize={FlexGapSize.gapSize0}>
                        <IconButton
                            padding={ButtonPadding.paddingQuarter}
                            style={ButtonStyle.transparent}
                            image={IconImage.edit}
                            onClick={onEditClickHandler}
                        />
                        <IconButton
                            padding={ButtonPadding.paddingQuarter}
                            style={ButtonStyle.transparent}
                            image={IconImage.remove}
                            onClick={onTrashClickHandler}
                        />
                    </Flex>
                )}
            </Flex>
        </Button>
    );
};

export const StringList = (props: StringListProps) => {
    return (
        <SimpleList
            itemToString={(item: string) => item}
            createNewItem={(item: string) => item}
            title={props.title}
            isDisabled={props.isDisabled}
            items={props.items}
            onListUpdated={props.onListUpdated}
            onRowEditClick={props.onRowEditClick}
            onRowClick={props.onRowClick}
        />
    );
};
type StringListProps = {
    title: string;
    items?: Array<string>;
    isDisabled?: boolean;
    onListUpdated?: (items: Array<string>) => void;
    onRowEditClick?: (index: number) => void;
    onRowClick?: (index: number) => void;
};

type SimpleListProps<T> = {
    title: string;
    items?: Array<T>;
    isDisabled?: boolean;
    itemToString: (item: T) => string;
    createNewItem: (itemAsStr: string) => T;
    onListUpdated?: (items: Array<T>) => void;
    onRowEditClick?: (index: number) => void;
    onRowClick?: (index: number) => void;
};

type SimpleRowProps<T> = {
    item: T;
    itemAsString: string;
    index: number;
    isDisabled?: boolean;
    onTrashClick?: (index: number) => void;
    onEditClick?: (index: number) => void;
    onClick?: (index: number) => void;
};
