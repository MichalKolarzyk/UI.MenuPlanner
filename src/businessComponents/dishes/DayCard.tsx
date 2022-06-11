import { DishModel, DishTypeEnum } from "../../api/models";
import Card from "../../ui/containers/cards/card/Card";
import Flex, { FlexStyle } from "../../ui/containers/flexes/Flex";
import Label from "../../ui/labels/label/Label";

const DayCard = (props: DayCardProps) => {
    const breakfast = props.dishes?.filter(d => d.dishType === DishTypeEnum.breakfast)

    return <Card>
        <Flex style={FlexStyle.column}>
            <Label>{DishTypeEnum.breakfast}</Label>
            {breakfast?.map(b => <Label>{b.recipeTitle}</Label>)}
        </Flex>
    </Card>
}

export class DayCardProps{
    day?: string;
    dishes?: Array<DishModel>
}

export default DayCard;