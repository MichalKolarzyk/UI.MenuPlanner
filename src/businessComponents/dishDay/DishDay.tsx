import { useSelector, useStore } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DishModel, DishTypeEnum } from "../../api/models";
import { DateHelper, DayOfWeek } from "../../helpers/DateHelper";
import { RootState } from "../../redux";
import { ButtonStyle } from "../../ui/buttons/button/Button";
import IconButton, { IconButtonSize } from "../../ui/buttons/iconButton/IconButton";
import Canvas, { CanvasOpacity, CanvasSize } from "../../ui/canvases/Canvas";
import { ZIndexEnum, AnimationEnum, FontsizeEnum, ColorEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card, { CardColors } from "../../ui/containers/cards/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import Grid from "../../ui/containers/grid/Grid";
import { IconImage } from "../../ui/icons/Icon";
import Label from "../../ui/labels/label/Label";

const DishDay = () => {
    const { day } = useParams();
    const navigate = useNavigate();
    const dishes = useSelector<RootState, Array<DishModel> | undefined>((store) => store.dishes.dishes);

    const date = DateHelper.toDate(day ?? "");
    const dayOfWeek = DateHelper.toDayOfWeekShort(date);
    const dateDayMonth = DateHelper.toDayMonthString(date);
    const goBack = () => {
        navigate("../");
    };

    const getDishes = (dayAsString?: string, type?: DishTypeEnum): Array<DishModel> => {
        return dishes?.filter((d) => d.day === dayAsString && d.dishType === type) ?? [];
    };

    const getSectionElement = (type: DishTypeEnum) => {
        return (
            <Card color={CardColors.grey}>
                <IconButton style={ButtonStyle.transparent} image={IconImage.add} text={type} />
                <Flex>
                    {getDishes(day, type).map((d) => (
                        <Card color={CardColors.blue}>
                            <Flex>
                                <Label bold color={ColorEnum.white}>
                                    {d.recipeTitle}
                                </Label>
                                <IconButton
                                    padding={PaddingEnum.paddingQuarter}
                                    image={IconImage.remove}
                                    style={ButtonStyle.transparentWhite}
                                />
                            </Flex>
                        </Card>
                    ))}
                </Flex>
            </Card>
        );
    };

    const sectionElements = [
        DishTypeEnum.breakfast,
        DishTypeEnum.snack,
        DishTypeEnum.dinner,
        DishTypeEnum.lunch,
        DishTypeEnum.starter,
        DishTypeEnum.supper,
    ].map((t) => getSectionElement(t));

    return (
        <>
            <Canvas onClick={goBack} zIndex={ZIndexEnum.zIndex20} opacity={CanvasOpacity.light} />
            <Flex style={FlexStyle.column}>
                <Canvas
                    animation={AnimationEnum.slideDown}
                    opacity={CanvasOpacity.light}
                    size={CanvasSize.none}
                    zIndex={ZIndexEnum.zIndex30}
                >
                    <Card>
                        <Flex
                            style={FlexStyle.column}
                            alignItems={FlexAlignItems.alignUnset}
                            gapSize={FlexGapSize.gapSize3}
                        >
                            <Flex alignItems={FlexAlignItems.alignUnset} justify={FlexJustify.spaceBetween}>
                                <Label bold size={FontsizeEnum.medium}>
                                    {dateDayMonth} {dayOfWeek}
                                </Label>
                                <IconButton
                                    style={ButtonStyle.transparent}
                                    image={IconImage.edit}
                                    size={IconButtonSize.medium}
                                />
                            </Flex>

                            <Grid cellHeight="350px" cellWidth="300px" rows={2} columns={3}>
                                {sectionElements}
                            </Grid>

                            <Flex justify={FlexJustify.spaceBetween}>
                                <IconButton style={ButtonStyle.accept} image={IconImage.save} text="Submit" />
                                <IconButton
                                    onClick={goBack}
                                    style={ButtonStyle.cancel}
                                    image={IconImage.remove}
                                    text="Cancel"
                                />
                            </Flex>
                        </Flex>
                    </Card>
                </Canvas>
            </Flex>
        </>
    );
};

export default DishDay;
