import Flex from "../../containers/flexes/Flex";
import Icon, { IconImage } from "../../icons/Icon";
import Label, { LabelProps } from "../label/Label";

const IconLabel = (props: IconLabelProps) => {
    return (
        <Flex>
            <Icon image={props.image} />
            <Label {...props as LabelProps}/>
        </Flex>
    );
};

export default IconLabel;

export class IconLabelProps extends LabelProps {
    image?: IconImage;
}
