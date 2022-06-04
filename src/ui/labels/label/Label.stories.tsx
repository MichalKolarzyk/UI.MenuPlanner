import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "./Label";

export default {
    title: "UI/Labels",
    component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}>Hello</Label>;
export const label = Template.bind({});
label.args = {
    
};