import { isDisabled } from "@testing-library/user-event/dist/utils";
import { ButtonStyle } from "../../buttons/button/Button";
import IconButton, { IconButtonSize } from "../../buttons/iconButton/IconButton";
import { ColorEnum, FontsizeEnum, PaddingEnum, ShapeEnum } from "../../constants/Constants";
import Card, { CardColors, CardShape } from "../../containers/cards/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage, IconSize } from "../../icons/Icon";
import Label from "../../labels/label/Label";

const Multiselect = (props: MultiselectProps) => {
    const isSelected = (item: any) => {
        return props.seletedKeys?.some((key) => key === props.itemKey?.(item));
    };

    let elements = props.items?.map((item, index) => (
        <>
            {(isSelected(item) || !props.isDisabled) && (
                <Card
                    padding={props.isDisabled ? PaddingEnum.paddingHalf : PaddingEnum.paddingZero}
                    color={isSelected(item) ? CardColors.blue : CardColors.grey}
                    shape={CardShape.roundedCorners2}
                >
                    <Flex alignItems={FlexAlignItems.alignBaseline}>
                        {!props.isDisabled && (
                            <IconButton
                                text={props.itemToString?.(item)}
                                onClick={() => props.onItemClick?.(props.itemKey?.(item), !isSelected(item))}
                                image={isSelected(item) ? IconImage.minus : IconImage.add}
                                style={isSelected(item) ? ButtonStyle.transparentWhite : ButtonStyle.transparent}
                                shape={ShapeEnum.rounded}
                                size={IconButtonSize.small}
                            />
                        )}
                        {props.isDisabled && <Label color={ColorEnum.white}>{props.itemToString?.(item)}</Label>}
                    </Flex>
                </Card>
            )}
        </>
    ));

    return (
        <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
            <Label bold size={FontsizeEnum.small}>
                {props.title}
            </Label>
            <Flex>{elements}</Flex>
        </Flex>
    );
};

interface MultiselectProps {
    items?: Array<any>;
    seletedKeys?: Array<any>;
    itemKey?: (item: any) => any;
    title?: string;
    isDisabled?: boolean;
    itemToString?: (item: any) => string;
    onItemClick?: (key: any, selected: boolean) => void;
}

export default Multiselect;
