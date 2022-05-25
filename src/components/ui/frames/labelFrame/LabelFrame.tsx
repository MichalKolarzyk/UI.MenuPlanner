import Label, { LabelSize } from "../../labels/label/Label";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import { ColorEnum } from "../../constants/Constants";

const LabelFrame = (props: LabelFrameProps) => {
    return (
        <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column} gapSize={FlexGapSize.gapSize0}>
            <Flex justify={FlexJustify.left}>
                <Label
                    bold={props.upperLabelIsBold}
                    italic={props.upperLabelIsItalic}
                    size={props.upperLabelSize}
                    color={props.upperLabelStyle}
                >
                    {props.upperLabel}
                </Label>
            </Flex>
            {props.children}
            <Flex justify={FlexJustify.right}>
            <Label
                    bold={props.bottomLabelIsBold}
                    italic={props.bottomLabelIsItalic}
                    size={props.bottomLabelSize}
                    color={props.bottomLabelStyle}
                >
                    {props.bottomLabel}
                </Label>
            </Flex>
        </Flex>
    );
};

type LabelFrameProps = {
    upperLabelStyle?: ColorEnum;
    upperLabel?: string;
    upperLabelIsBold?: boolean;
    upperLabelIsItalic?: boolean;
    upperLabelSize?: LabelSize;
    bottomLabelStyle?: ColorEnum;
    bottomLabel?: string;
    bottomLabelIsBold?: boolean;
    bottomLabelIsItalic?: boolean;
    bottomLabelSize?: LabelSize;
    children?: any;
};

export default LabelFrame;
