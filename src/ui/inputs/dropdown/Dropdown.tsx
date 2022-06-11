import { useId, useState } from "react";
import Button, { ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import { PaddingEnum, PositionEnum, ZIndexEnum } from "../../constants/Constants";
import Card, { CardColors } from "../../containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import Label from "../../labels/label/Label";
import Input, { InputStyle } from "../input/Input";

const Dropdown = (props: DropdownProps) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const selectChange = (event: any) => {
        const seletedValue = event.target.value;
        const selectedItem = props.items?.find((i) => props.itemToString?.(i) === seletedValue);
        console.log(event);
        props.onItemSelected?.(selectedItem);
    };

    const inputClickHandler = () => {
        setIsDropdownVisible(true);
    };

    const cardBlurHandler = () => {
        //setIsDropdownVisible(false);
    };

    const elementClickHandler = (item: any) => {
        props.onItemSelected?.(item)
        setIsDropdownVisible(false);
    }

    const options = props.items?.map?.((i, index) => (
        <Button style={ButtonStyle.transparent} key={index} onClick={() => elementClickHandler(i)}>{props.itemToString?.(i)}</Button>
    ));

    return (
        <Card onBlur={cardBlurHandler} position={PositionEnum.relative} padding={PaddingEnum.paddingZero}>
            <Flex gapSize={FlexGapSize.gapSize0}>
                <Input
                    value={props.searchPhrase}
                    onClick={inputClickHandler}
                    onChange={props.onSerchPhraseChange}
                    style={InputStyle.transparent}
                />
                <IconButton
                    onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                    style={ButtonStyle.transparent}
                    image={IconImage.sortDown}
                ></IconButton>
            </Flex>
            {isDropdownVisible && (
                <Card position={PositionEnum.absolute} color={CardColors.grey}>
                    <Flex gapSize={FlexGapSize.gapSize0} style={FlexStyle.column}>
                        {options}
                    </Flex>
                </Card>
            )}
        </Card>
    );
};

export interface DropdownProps {
    items?: Array<any>;
    searchPhrase?: string;
    onSerchPhraseChange?: (event: any) => void;
    itemToString?: (item: any) => string;
    onItemSelected?: (item: any) => void;
}

export default Dropdown;
