import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { overlayPortal } from "../../portals";
import { RootState } from "../../redux";
import { updateStep } from "../recipe/redux/recipeActions";
import Canvas, {  CanvasSize } from "../../ui/canvases/Canvas";
import { AnimationEnum, FontsizeEnum, ZIndexEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import Input, { InputType } from "../../ui/inputs/input/Input";
import Label from "../../ui/labels/label/Label";
import { RecipeReducerModes } from "../recipe/redux/recipe.reducer";
import { RecipeModel } from "../../api/models";

const EditStep = () => {
    const { stepIndex } = useParams();
    const index: number = Number(stepIndex);
    const recipe = useSelector<RootState, RecipeModel | undefined>((state) => state.recipe.recipe);
    const mode = useSelector<RootState, RecipeReducerModes | undefined>((state) => state.recipe.mode);
    const navigate = useNavigate();
    const dispach = useDispatch();
    const backdropClick = () => {
        navigate("../");
    };

    const inputChangeHandler = (event: any) => {
        const newValue = event.target.value;
        dispach(updateStep(index, newValue));
    };

    const portal = overlayPortal;
    if (!portal || !stepIndex) {
        return <></>;
    }

    const element = (
        <>
            <Canvas zIndex={ZIndexEnum.zIndex20} onClick={backdropClick} />
            <Canvas zIndex={ZIndexEnum.zIndex30} size={CanvasSize.small} animation={AnimationEnum.slideDown}>
                <Card>
                    <Flex
                        style={FlexStyle.column}
                        alignItems={FlexAlignItems.alignUnset}
                        gapSize={FlexGapSize.gapSize2}
                    >
                        <Label size={FontsizeEnum.medium} bold>
                            Edit step
                        </Label>
                        <Input
                            type={InputType.textarea}
                            disabled={mode !== RecipeReducerModes.edit}
                            value={recipe?.steps?.[index]}
                            onChange={inputChangeHandler}
                        />
                    </Flex>
                </Card>
            </Canvas>
        </>
    );
    return ReactDOM.createPortal(element, portal);
};

export default EditStep;
