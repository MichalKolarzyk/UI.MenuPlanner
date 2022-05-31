import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux";
import { ButtonStyle } from "../ui/buttons/button/Button";
import IconButton from "../ui/buttons/iconButton/IconButton";
import { AnimationEnum } from "../ui/constants/Constants";
import Card, { CardColors } from "../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../ui/containers/flexes/Flex";
import Icon, { IconImage, IconSize } from "../ui/icons/Icon";
import { InputType } from "../ui/inputs/input/Input";
import LabelInput from "../ui/inputs/labelInput/LabelInput";
import Label, { LabelSize } from "../ui/labels/label/Label";

const Login = () => {
    const navigate = useNavigate();
    const dispach = useDispatch<AppDispatch>();

    const loginHandler = () => {
        navigate("/recipes");
    };

    const registrationHandler = () => {
        navigate("/registration");
    };

    return (
        <Flex style={FlexStyle.column} justify={FlexJustify.center} alignItems={FlexAlignItems.alignCenter}>
            <Card color={CardColors.grey}>
                <Flex gapSize={FlexGapSize.gapSize3}>
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
        </Flex>
    );
};

export default Login;
