import Flex, { FlexGapSize, FlexStyle } from "../../containers/flexes/Flex";
import Icon, { IconImage, IconSize, IconStyle } from "../../icons/Icon";
import Label, { LabelSize, LabelStyle } from "../../labels/label/Label";
import Button, { ButtonShape, ButtonStyle } from "../button/Button";

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

    return (
        <Button style={props.style} shape={props.shape}>
            <Flex style={FlexStyle.row} gapSize={FlexGapSize.gapSize1}>
                {props.image && <Icon size={iconSize} image={props.image} style={IconStyle.white} />}
                {props.text && <Label size={labelSize} style={LabelStyle.white}>
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
    onClick?(): () => {};
};

export enum IconButtonSize {
    small = "small",
    medium = "medium",
    large = "large",
}

export default IconButton;
