import { AnimationEnum, ColorEnum, FontsizeEnum, PaddingEnum, ShapeEnum } from "../../constants/Constants";
import Flex, { FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import Icon, { IconImage, IconSize } from "../../icons/Icon";
import Label from "../../labels/label/Label";
import Button, { ButtonStyle } from "../button/Button";

const IconButton = (props: IconButtonProps) => {
    let iconSize = IconSize.small;
    let labelSize = FontsizeEnum.small;
    let animation = props.iconAnimation;
    let image = props.image;
    if (props.size === IconButtonSize.medium) {
        iconSize = IconSize.medium;
        labelSize = FontsizeEnum.medium;
    } else if (props.size === IconButtonSize.large) {
        iconSize = IconSize.large;
        labelSize = FontsizeEnum.large;
    }

    let iconColor = ColorEnum.white;
    let labelStyle = ColorEnum.white;
    if (props.style === ButtonStyle.transparent) {
        iconColor = ColorEnum.gray;
        labelStyle = ColorEnum.gray;
    } else if (props.style === ButtonStyle.grey) {
        iconColor = ColorEnum.gray;
        labelStyle = ColorEnum.gray;
    }

    if(props.isLoading){
        animation = AnimationEnum.spin
        image = IconImage.spin
    }

    return (
        <Button
            submit={props.submit}
            padding={props.padding}
            onClick={props.onClick}
            style={props.style}
            shape={props.shape}
            isDisabled={props.isDisabled}
        >
            <Flex style={FlexStyle.row} justify={FlexJustify.stretch} gapSize={FlexGapSize.gapSize1}>
                {props.image && (
                    <Icon color={iconColor} animation={animation} size={iconSize} image={image} />
                )}
                {props.text && (
                    <Label size={labelSize} color={labelStyle}>
                        {props.text}
                    </Label>
                )}
            </Flex>
        </Button>
    );
};

export interface IconButtonProps {
    image?: IconImage;
    style?: ButtonStyle;
    size?: IconButtonSize;
    shape?: ShapeEnum;
    text?: string;
    padding?: PaddingEnum;
    iconAnimation?: AnimationEnum;
    onClick?: (event?: any) => void;
    submit?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
}

export enum IconButtonSize {
    small = "small",
    medium = "medium",
    large = "large",
}

export default IconButton;
