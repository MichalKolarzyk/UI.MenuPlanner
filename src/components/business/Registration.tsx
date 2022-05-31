import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../ui/buttons/button/Button";
import IconButton from "../ui/buttons/iconButton/IconButton";
import Card, { CardColors } from "../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../ui/containers/flexes/Flex";
import { IconImage } from "../ui/icons/Icon";
import { InputType } from "../ui/inputs/input/Input";
import LabelInput from "../ui/inputs/labelInput/LabelInput";
import Label, { LabelSize } from "../ui/labels/label/Label";

const Registration = () => {
    const navigate = useNavigate();

    const loginHandler = () => {
        navigate("/login");
    };

    return (
        <Flex style={FlexStyle.column} justify={FlexJustify.center} alignItems={FlexAlignItems.alignCenter}>
            <Card color={CardColors.grey}>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                    <Label bold italic size={LabelSize.medium}>
                        Sign up
                    </Label>
                    <LabelInput label="Firstname" />
                    <LabelInput label="Lastname" />
                    <LabelInput label="Email" />
                    <LabelInput type={InputType.password} label="Password" />
                    <LabelInput type={InputType.password} label="Confirm password" />
                    <IconButton image={IconImage.user} text="Sign up" />
                    <IconButton onClick={loginHandler} style={ButtonStyle.cancel} image={IconImage.save} text="Sign in" />
                </Flex>
            </Card>
        </Flex>
    );
};

export default Registration;
