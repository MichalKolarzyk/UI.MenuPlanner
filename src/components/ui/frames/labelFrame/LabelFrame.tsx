import Label, { LabelSize, LabelStyle } from "../../labels/label/Label";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";

const LabelFrame = (props: LabelFrameProps) => {
    return (
        <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column} gapSize={FlexGapSize.gapSize0}>
            <Flex justify={FlexJustify.left}>
                <Label
                    bold={props.upperLabelIsBold}
                    italic={props.upperLabelIsItalic}
                    size={props.upperLabelSize}
                    style={props.upperLabelStyle}
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
                    style={props.bottomLabelStyle}
                >
                    {props.bottomLabel}
                </Label>
            </Flex>
        </Flex>
    );
};

type LabelFrameProps = {
    upperLabelStyle?: LabelStyle;
    upperLabel?: string;
    upperLabelIsBold?: boolean;
    upperLabelIsItalic?: boolean;
    upperLabelSize?: LabelSize;
    bottomLabelStyle?: LabelStyle;
    bottomLabel?: string;
    bottomLabelIsBold?: boolean;
    bottomLabelIsItalic?: boolean;
    bottomLabelSize?: LabelSize;
    children?: any;
};

export default LabelFrame;
