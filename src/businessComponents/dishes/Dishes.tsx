import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DishModel } from "../../api/models";
import { DateHelper } from "../../helpers/DateHelper";
import { AppDispatch, RootState } from "../../redux";
import { FontsizeEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../ui/containers/flexes/Flex";
import Grid from "../../ui/containers/grid/Grid";
import Label from "../../ui/labels/label/Label";
import DayCard from "./DayCard";
import { fetchDishes } from "./dishes.reducer";

const Dishes = () => {
    const dispach = useDispatch<AppDispatch>();
    const dishes = useSelector<RootState, Array<DishModel> | undefined>((state) => state.dishes.dishes);
    const numberOfDays = useSelector<RootState, number | undefined>((state) => state.dishes.numberOfDays);
    const startDay = new Date();

    console.log(dishes);
    useEffect(() => {
        dispach(fetchDishes());
    }, []);

    const getDishesByDate = (date: Date) => {
        const dateStr = DateHelper.toString(date);
        return dishes?.filter((d) => d.day === dateStr);
    };

    const getOldCardsElements = () => {
        const dayOfWeek = (startDay.getDay() + 6) % 7 ;
        const days = DateHelper.toPreviousDays(startDay, dayOfWeek)
        return days.map((day, index) => <DayCard day={day} isDisabled/>)
    }

    const days: Array<Date> = DateHelper.toDates(startDay, numberOfDays ?? 7);
    const elements = days.map((d) => <DayCard day={d} dishes={getDishesByDate(d)} />);

    return (
        <Card padding={PaddingEnum.paddingOne}>
            <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
                <Label bold size={FontsizeEnum.large}>
                    Dishes
                </Label>
                <Flex style={FlexStyle.column}>
                    <Grid cellHeight="380px" cellWidth="250px" columns={7} rows={2}>
                        {getOldCardsElements()}
                        {elements}
                    </Grid>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Dishes;
