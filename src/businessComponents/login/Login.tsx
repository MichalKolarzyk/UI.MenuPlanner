import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../../ui/buttons/button/Button";
import IconButton from "../../ui/buttons/iconButton/IconButton";
import Canvas, { CanvasSize } from "../../ui/canvases/Canvas";
import { AnimationEnum } from "../../ui/constants/Constants";
import Card, { CardColors } from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexStyle } from "../../ui/containers/flexes/Flex";
import { IconImage } from "../../ui/icons/Icon";
import { InputType } from "../../ui/inputs/input/Input";
import LabelInput from "../../ui/inputs/labelInput/LabelInput";
import Label, { LabelSize } from "../../ui/labels/label/Label";

const Login = () => {
    const navigate = useNavigate();

    const loginHandler = () => {
        navigate("/recipes");
    };

    const registrationHandler = () => {
        navigate("/registration");
    };

    return (
        <Canvas size={CanvasSize.fullscreen}>
            <Canvas size={CanvasSize.extraSmall} animation={AnimationEnum.slideDown}>
                <Card color={CardColors.grey}>
                    <Flex
                        style={FlexStyle.column}
                        alignItems={FlexAlignItems.alignUnset}
                        gapSize={FlexGapSize.gapSize2}
                    >
                        <Label bold italic size={LabelSize.medium}>
                            Sign In
                        </Label>
                        <LabelInput label="Email" />
                        <LabelInput type={InputType.password} label="Password" />
                        <Flex>
                            <IconButton onClick={loginHandler} image={IconImage.user} text="Login" />
                            <IconButton
                                style={ButtonStyle.cancel}
                                onClick={registrationHandler}
                                image={IconImage.save}
                                text="Sing up"
                            />
                        </Flex>
                    </Flex>
                </Card>
            </Canvas>
        </Canvas>
    );
};

export default Login;
