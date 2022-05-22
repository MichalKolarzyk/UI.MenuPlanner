import Flex, { FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import Icon, { IconImage, IconSize, IconStyle } from "../../icons/Icon";
import Label, { LabelSize, LabelStyle } from "../../labels/label/Label";
import Button, { ButtonPadding, ButtonShape, ButtonStyle } from "../button/Button";

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

    let iconStyle = IconStyle.white;
    let labelStyle = LabelStyle.white;
    if(props.style === ButtonStyle.transparent){
        iconStyle = IconStyle.greay;
        labelStyle = LabelStyle.grey;
    } else if (props.style === ButtonStyle.grey){
        iconStyle = IconStyle.greay;
        labelStyle = LabelStyle.grey;    
    }

    
    return (
        <Button padding={props.padding} onClick={props.onClick} style={props.style} shape={props.shape}>
            <Flex style={FlexStyle.row} gapSize={FlexGapSize.gapSize1}>
                {props.image && <Icon style={iconStyle} size={iconSize} image={props.image} />}
                {props.text && <Label size={labelSize} style={labelStyle}>
                    {props.text}
                </Label>}
            </Flex>
        </Button>
    );
};

type IconButtonProps = {
    image?: IconImage;
    style?: ButtonStyle;
    size?: IconButtonSize;
    shape?: ButtonShape;
    text?: string;
    padding?: ButtonPadding;
    onClick?: (event?: any) => void;
};

export enum IconButtonSize {
    small = "small",
    medium = "medium",
    large = "large",
}

export default IconButton;
