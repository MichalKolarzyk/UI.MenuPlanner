import { useState } from "react";
import { ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import { PaddingEnum } from "../../constants/Constants";
import Card, { CardColors } from "../../containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import Label from "../../labels/label/Label";
import Input, { InputStyle } from "../input/Input";
import LabelInput from "../labelInput/LabelInput";

const Dropdown = (props: DropdownProps) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const selectChange = (event: any) => {
        const seletedValue = event.target.value;
        const selectedItem = props.items?.find((i) => props.itemToString?.(i) === seletedValue);
        console.log(event);
        props.onItemSelected?.(selectedItem);
    };

    const openDropdownHandler = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    const closeDropdownHandler = () => {
        setIsDropdownVisible(false);
    };
    const options = props.items?.map?.((i) => (
        //<Label value={props.itemToString?.(i)}>{props.itemToString?.(i)}</Label>
        <Label>{props.itemToString?.(i)}</Label>
    ));

    return (
        <Card padding={PaddingEnum.paddingZero}>
            <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
                <Flex gapSize={FlexGapSize.gapSize0}>
                    <Input style={InputStyle.transparent}/>
                    <IconButton
                        onClick={openDropdownHandler}
                        style={ButtonStyle.transparent}
                        image={IconImage.sortDown}
                    ></IconButton>
                </Flex>
                {isDropdownVisible && <Card color={CardColors.grey}>
                    <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
                        {options}
                    </Flex>
                </Card>}
            </Flex>
        </Card>
    );

    //<select onBlur={closeDropdownHandler} onClick={openDropdownHandler} onChange={selectChange}>{options}</select>;
};

export interface DropdownProps {
    items?: Array<any>;
    searchPhrase?: string;
    itemToString?: (item: any) => string;
    onItemSelected?: (item: any) => void;
}

export default Dropdown;
