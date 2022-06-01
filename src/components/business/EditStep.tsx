import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import RecipeModel from "../../models/RecipeModel";
import { overlayPortal } from "../../portals";
import { RootState } from "../../redux";
import Backdrop from "../ui/backdrops/Backdrop";
import Card from "../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexJustify, FlexStyle } from "../ui/containers/flexes/Flex";
import Input from "../ui/inputs/input/Input";
import Label, { LabelSize } from "../ui/labels/label/Label";

const EditStep = () => {
    const { stepIndex } = useParams();
    const index: number = Number(stepIndex);
    const recipe = useSelector<RootState, RecipeModel | undefined>((state) => state.recipe.recipe);
    const navigate = useNavigate();
    const backdropClick = () => {
        navigate("../");
    };

    const portal = overlayPortal;
    if (!portal || !stepIndex) {
        return <></>;
    }

    const element = (
        <Backdrop onClick={backdropClick}>
            <Flex style={FlexStyle.column} justify={FlexJustify.center} alignItems={FlexAlignItems.alignCenter}>
                <Card>
                    <Flex style={FlexStyle.column}>
                        <Label size={LabelSize.medium} bold >Edit step</Label>
                        <Input value={recipe?.steps?.[index]} />
                    </Flex>
                </Card>
            </Flex>
        </Backdrop>
    );
    return ReactDOM.createPortal(element, portal);
};

export default EditStep;
