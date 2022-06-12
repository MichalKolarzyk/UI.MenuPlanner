import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon, { IconImage, IconSize } from "../../icons/Icon";
import Card, { CardColors } from "../cards/Card";
import Flex, { FlexGapSize, FlexStyle } from "./Flex";

export default {
    title: "UI/Containers",
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
    <Flex {...args}>
        <Card color={CardColors.green}>
            <Icon size={IconSize.small} image={IconImage.add} />
        </Card>
        <Card color={CardColors.green}>
            <Icon size={IconSize.large} image={IconImage.remove} />
        </Card>
        <Card color={CardColors.grey}>
            <Icon size={IconSize.medium} image={IconImage.close} />
        </Card>
    </Flex>
);
export const flex = Template.bind({});
flex.args = {
    gapSize: FlexGapSize.gapSize1,
    style: FlexStyle.column,
};
