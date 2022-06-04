import { ColorEnum } from "../../constants/Constants";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import Icon, { IconImage } from "../../icons/Icon";
import Label from "../../labels/label/Label";
import Input, { InputType } from "../input/Input";

const LabelInput = (props: LabelInputProps) => {
    return (
        <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column} gapSize={FlexGapSize.gapSize0}>
            <Flex justify={FlexJustify.left}>
                <Flex>
                    <Icon image={props.image}/>
                    <Label>{props.label}</Label>
                </Flex>
            </Flex>
            <Input value={props.value} onChange={props.onChange} options={props.options} type={props.type} isValid={props.isValid}></Input>
            <Flex justify={FlexJustify.right}>
                <Label color={ColorEnum.redL1}>{props.errorMessage}</Label>
            </Flex>
        </Flex>
    );
};

export interface LabelInputProps {
    type?: InputType;
    isValid?: boolean;
    options?: Array<string>;
    label?: string;
    errorMessage?: string;
    value?: string;
    image?: IconImage;
    onChange?: (event: any) => void;
};

export default LabelInput;
