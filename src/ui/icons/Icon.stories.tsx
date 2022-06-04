import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
    title: "UI/Icons",
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

export const icon = Template.bind({});
icon.args = {
    
};