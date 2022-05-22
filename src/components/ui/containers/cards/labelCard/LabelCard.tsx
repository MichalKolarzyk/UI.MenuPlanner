import Label from "../../../labels/label/Label";
import Flex, { FlexStyle } from "../../flexes/Flex";
import Card, { CardColors, CardShape } from "../card/Card";

const LabelCard = (props: LabelCardProps) => {
    return (
        <Flex style={FlexStyle.column}>
            <Label>{props.upperLabel}</Label>
            <Card shape={props.shape} color={props.color}>{props.children}</Card>
            <Label>{props.bottomLabel}</Label>
        </Flex>
    );
};

type LabelCardProps = {
    shape?: CardShape,
    color?: CardColors,
    upperLabel?: string;
    bottomLabel?: string;
    children?: any;
};

export default LabelCard;
