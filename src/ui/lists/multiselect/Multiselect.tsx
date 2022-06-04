import { ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import { ColorEnum, ShapeEnum } from "../../constants/Constants";
import Card, { CardColors, CardShape } from "../../containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import Label, { LabelSize } from "../../labels/label/Label";

const Multiselect = (props: MultiselectProps) => {
    const isSelected = (index: number) => {
        return props.selectedIndexes?.some((i) => i === index);
    };

    const elements = props.items?.map((item, index) => (
        <Card color={isSelected(index) ? CardColors.blue : CardColors.grey} shape={CardShape.roundedCorners2}>
            <Flex>
                <Label color={isSelected(index) ? ColorEnum.white : ColorEnum.gray} size={LabelSize.medium}>
                    {props.itemToString?.(item)}
                </Label>
                <IconButton
                    onClick={() => props.onItemClick?.(item, !isSelected(index))}
                    image={isSelected(index) ? IconImage.remove : IconImage.add}
                    style={ButtonStyle.transparent}
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
    selectedIndexes?: Array<number>;
    title?: string;
    itemToString?: (item: any) => string;
    onItemClick?: (item: any, selected: boolean) => void;
}

export default Multiselect;
