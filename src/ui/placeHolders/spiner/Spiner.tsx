import { AnimationEnum } from "../../constants/Constants";
import Flex, { FlexJustify } from "../../containers/flexes/Flex";
import Icon, { IconImage } from "../../icons/Icon";

const Spiner = () => {
    return (
        <Flex justify={FlexJustify.center}>
            <Icon image={IconImage.spin} animation={AnimationEnum.spin} />
        </Flex>
    );
};

export default Spiner;
