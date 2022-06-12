import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card, { CardColors } from "../../containers/cards/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import Dropdown from "./Dropdown";

export default {
    title: "UI/Inputs",
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
        <Dropdown {...args} />
        <Card color={CardColors.green} />
    </Flex>
);

export const dropdown = Template.bind({});
dropdown.args = {
    itemToString: (item: any) => `${item.name} : ${item.description}` ,
    items: [
        {
            name: "tag1",
            description: "tag desc 1",
        },
        {
            name: "tag2",
            description: "tag desc 2",
        },
        {
            name: "tag3",
            description: "tag desc 3",
        },
    ],
};
