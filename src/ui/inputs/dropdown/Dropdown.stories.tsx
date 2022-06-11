import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
    title: "UI/Inputs",
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args}/>;

export const dropdown = Template.bind({});
dropdown.args = {
    itemToString: (item: any) => item.name,
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
    ]
};