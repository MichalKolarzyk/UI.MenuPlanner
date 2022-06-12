import { useNavigate } from "react-router-dom";
import { DishModel, DishTypeEnum } from "../../api/models";
import { DateHelper } from "../../helpers/DateHelper";
import Button, { ButtonStyle } from "../../ui/buttons/button/Button";
import IconButton, { IconButtonSize } from "../../ui/buttons/iconButton/IconButton";
import { ColorEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card, { CardColors } from "../../ui/containers/cards/Card";
import Flex, { FlexAlignItems, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import { IconImage } from "../../ui/icons/Icon";
import Label from "../../ui/labels/label/Label";

const DayCard = (props: DayCardProps) => {
    const navigate = useNavigate();
    const getDishByType = (type: DishTypeEnum) => {
        return props.dishes?.filter((d) => d.dishType === type);
    };

    const date = DateHelper.toDayMonthString(props.day);
    const dayOfWeek = DateHelper.getDayOfWeek(props.day);

    const onRecipeClick = (dish: DishModel) => {
        navigate(`/recipes/${dish.recipeId}`);
    };

    const sectionElements = [DishTypeEnum.breakfast, DishTypeEnum.snack, DishTypeEnum.dinner, DishTypeEnum.lunch].map(
        (t) => (
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                <IconButton
                    onClick={() => props.onAdd?.(props.day, t)}
                    size={IconButtonSize.small}
                    padding={PaddingEnum.paddingQuarter}
                    style={ButtonStyle.transparent}
                    image={IconImage.add}
                    text={t}
                />
                <Flex alignItems={FlexAlignItems.alignUnset}>
                    {getDishByType(t)?.map((d, index) => (
                        <Button onClick={() => onRecipeClick(d)} padding={PaddingEnum.paddingQuarter}>
                            <Label bold color={ColorEnum.white}>
                                {d.recipeTitle}
                            </Label>
                        </Button>
                    ))}
                </Flex>
            </Flex>
        )
    );

    let cardColor;
    const isToday = DateHelper.isToday(props.day);
    if (isToday === -1) {
        cardColor = CardColors.darkGrey;
    } else if (isToday === 0) {
        cardColor = CardColors.green;
    } else {
        cardColor = CardColors.grey;
    }

    return (
        <Card color={cardColor}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                <Flex justify={FlexJustify.spaceBetween}>
                    <Label bold>
                        {date} {dayOfWeek}
                    </Label>
                    {!props.isDisabled && (
                        <IconButton
                            onClick={() => props.onAdd?.(props.day)}
                            style={ButtonStyle.transparent}
                            image={IconImage.edit}
                        />
                    )}
                </Flex>
                {!props.isDisabled && sectionElements}
            </Flex>
        </Card>
    );
};

export class DayCardProps {
    day?: Date;
    dishes?: Array<DishModel>;
    isDisabled?: boolean;
    onAdd?: (day?: Date, type?: DishTypeEnum) => void;
    onEdit?: (day?: Date) => void;
}

export default DayCard;
