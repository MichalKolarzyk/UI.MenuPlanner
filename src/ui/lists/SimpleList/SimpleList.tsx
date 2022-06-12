import { ChangeEvent, useState } from "react";
import Card, { CardColors, CardShape } from "../../containers/cards/Card";
import Label from "../../labels/label/Label";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import IconButton from "../../buttons/iconButton/IconButton";
import { IconImage } from "../../icons/Icon";
import Input, { InputType } from "../../inputs/input/Input";
import Button, { ButtonStyle } from "../../buttons/button/Button";
import { FontsizeEnum, PaddingEnum, ShapeEnum } from "../../constants/Constants";

export const SimpleList = <T,>(props: SimpleListProps<T>) => {
    const [addingMode, setAddingMode] = useState(false);
    const [newItemStr, setNewItemStr] = useState("");
    const items = props.items;

    const addButtonClickHandler = () => {
        setAddingMode(true);
    };

    const closeButtonClickHandler = () => {
        setAddingMode(false);
    };

    const onTrashClickHandler = (index?: number) => {
        props.onDeleteClick?.(index);
    };

    const onEditClickHandler = (index?: number) => {
        props.onEditClick?.(index);
    };

    const onAddElementHandler = () => {
        if (newItemStr !== null && newItemStr !== "") {
            props.onAddNewItem?.(newItemStr);
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
            itemAsString={props.itemToString?.(item)}
            onEditClick={onEditClickHandler}
            onTrashClick={onTrashClickHandler}
            item={item}
            index={index}
            isDisabled={props.isDisabled}
            onClick={props.onRowClick}
        />
    ));

    return (
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
            <Label bold size={FontsizeEnum.small}>
                {props.title}
            </Label>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                {itemView}
            </Flex>
            {!(props.isDisabled ?? true) && !addingMode && (
                <IconButton
                    padding={PaddingEnum.paddingHalf}
                    image={IconImage.add}
                    text="Add"
                    onClick={addButtonClickHandler}
                />
            )}

            {!(props.isDisabled ?? true) && addingMode && (
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignLeft}>
                    <Input type={InputType.textarea} value={newItemStr} onChange={onNewInputChangeHandler} />
                    <Flex>
                        <Button onClick={onAddElementHandler}>Add element</Button>
                        <IconButton
                            shape={ShapeEnum.slightlyRounded}
                            style={ButtonStyle.cancel}
                            image={IconImage.close}
                            onClick={closeButtonClickHandler}
                        />
                    </Flex>
                </Flex>
            )}
        </Flex>
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
        <Button shape={ShapeEnum.slightlyRounded} style={ButtonStyle.grey} onClick={onClickHandler}>
            <Flex justify={FlexJustify.spaceBetween}>
                <Label>{props.itemAsString}</Label>
                {!props.isDisabled && (
                    <Flex gapSize={FlexGapSize.gapSize0}>
                        <IconButton
                            padding={PaddingEnum.paddingQuarter}
                            style={ButtonStyle.transparent}
                            image={IconImage.edit}
                            onClick={onEditClickHandler}
                        />
                        <IconButton
                            padding={PaddingEnum.paddingQuarter}
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
    return <SimpleList {...props} itemToString={(item: string) => item} />;
};
type StringListProps = {
    title?: string;
    items?: Array<string>;
    isDisabled?: boolean;
    onEditClick?: (index?: number) => void;
    onRowClick?: (index?: number) => void;
    onAddNewItem?: (newItem: string) => void;
    onDeleteClick?: (index?: number) => void;
};

type SimpleListProps<T> = {
    title?: string;
    items?: Array<T>;
    isDisabled?: boolean;
    itemToString?: (item: T) => string;
    onAddNewItem?: (newItem: string) => void;
    onEditClick?: (index?: number) => void;
    onDeleteClick?: (index?: number) => void;
    onRowClick?: (index?: number) => void;
};

type SimpleRowProps<T> = {
    item?: T;
    itemAsString?: string;
    index?: number;
    isDisabled?: boolean;
    onTrashClick?: (index?: number) => void;
    onEditClick?: (index?: number) => void;
    onClick?: (index?: number) => void;
};
