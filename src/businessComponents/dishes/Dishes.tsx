import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DishModel } from "../../api/models";
import { AppDispatch, RootState } from "../../redux";
import { FontsizeEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../ui/containers/flexes/Flex";
import Dropdown from "../../ui/inputs/dropdown/Dropdown";
import Label from "../../ui/labels/label/Label";
import DayCard from "./DayCard";
import { fetchDishes } from "./dishes.reducer";

const Dishes = () => {
    const dispach = useDispatch<AppDispatch>();
    const dishes = useSelector<RootState, Array<DishModel> | undefined>((state) => state.dishes.dishes);
    const numberOfDays = useSelector<RootState, number | undefined>((state) => state.dishes.numberOfDays);



    console.log(dishes);
    useEffect(() => {
        dispach(fetchDishes());
    }, []);

    return (
        <Card padding={PaddingEnum.paddingOne}>
            <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
                <Label bold size={FontsizeEnum.large}>
                    Dishes
                </Label>
                <Flex>
                    <DayCard dishes={dishes} />
                </Flex>
            </Flex>
        </Card>
    );
};

export default Dishes;
