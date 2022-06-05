import { ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import { ColorEnum, ShapeEnum } from "../../constants/Constants";
import Card, { CardColors, CardShape } from "../../containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import Label, { LabelSize } from "../../labels/label/Label";

const Multiselect = (props: MultiselectProps) => {
    const isSelected = (item: any) => {
        return props.seletedKeys?.some((key) => key === props.itemKey?.(item));
    };

    const elements = props.items?.map((item, index) => (
        <Card color={isSelected(item) ? CardColors.blue : CardColors.grey} shape={CardShape.roundedCorners2}>
            <Flex>
                <Label color={isSelected(item) ? ColorEnum.white : ColorEnum.gray} size={LabelSize.medium}>
                    {props.itemToString?.(item)}
                </Label>
                <IconButton
                    onClick={() => props.onItemClick?.(props.itemKey?.(item), !isSelected(item))}
                    image={isSelected(item) ? IconImage.minus : IconImage.add}
                    style={isSelected(item) ? ButtonStyle.transparentWhite : ButtonStyle.transparent}
                    shape={ShapeEnum.elipse}
                />
            </Flex>
        </Card>
    ));

    return (
        <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
            <Label bold size={LabelSize.medium}>
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
    itemToString?: (item: any) => string;
    onItemClick?: (key: any, selected: boolean) => void;
}

export default Multiselect;
