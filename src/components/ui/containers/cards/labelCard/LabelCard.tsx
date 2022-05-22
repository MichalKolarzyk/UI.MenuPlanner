import Label, { LabelStyle } from "../../../labels/label/Label";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../flexes/Flex";

const LabelCard = (props: LabelCardProps) => {
    return (
        <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column} gapSize={FlexGapSize.gapSize0}>
            <Flex justify={FlexJustify.left}>
                <Label style={props.upperLabelStyle}>{props.upperLabel}</Label>
            </Flex>
            {props.children}
            <Flex justify={FlexJustify.right}>
                <Label style={props.bottomLabelStyle}>{props.bottomLabel}</Label>
            </Flex>
        </Flex>
    );
};

type LabelCardProps = {
    upperLabelStyle?: LabelStyle;
    upperLabel?: string;
    bottomLabelStyle?: LabelStyle;
    bottomLabel?: string;
    children?: any;
};

export default LabelCard;
