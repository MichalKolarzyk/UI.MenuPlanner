import { AnimationEnum, ColorEnum, PaddingEnum, ShapeEnum } from "../../constants/Constants";
import Flex, { FlexGapSize, FlexStyle } from "../../containers/flexes/Flex";
import Icon, { IconImage, IconSize } from "../../icons/Icon";
import Label, { LabelSize } from "../../labels/label/Label";
import Button, { ButtonStyle } from "../button/Button";

const IconButton = (props: IconButtonProps) => {
    let iconSize = IconSize.small;
    let labelSize = LabelSize.small;
    if (props.size === IconButtonSize.medium) {
        iconSize = IconSize.small;
        labelSize = LabelSize.medium;
    } else if (props.size === IconButtonSize.large) {
        iconSize = IconSize.medium;
        labelSize = LabelSize.large;
    }

    let iconColor = ColorEnum.white;
    let labelStyle = ColorEnum.white;
    if(props.style === ButtonStyle.transparent){
        iconColor = ColorEnum.gray;
        labelStyle = ColorEnum.gray;
    } else if (props.style === ButtonStyle.grey){
        iconColor = ColorEnum.gray;
        labelStyle = ColorEnum.gray;    
    }

    
    return (
        <Button submit={props.submit} padding={props.padding} onClick={props.onClick} style={props.style} shape={props.shape}>
            <Flex style={FlexStyle.row} gapSize={FlexGapSize.gapSize1}>
                {props.image && <Icon color={iconColor} animation={props.iconAnimation} size={iconSize} image={props.image} />}
                {props.text && <Label size={labelSize} color={labelStyle}>
                    {props.text}
                </Label>}
            </Flex>
        </Button>
    );
};

export class IconButtonProps {
    image?: IconImage;
    style?: ButtonStyle;
    size?: IconButtonSize;
    shape?: ShapeEnum;
    text?: string;
    padding?: PaddingEnum;
    iconAnimation?: AnimationEnum;
    onClick?: (event?: any) => void;
    submit?: boolean;
};

export enum IconButtonSize {
    small = "small",
    medium = "medium",
    large = "large",
}

export default IconButton;
