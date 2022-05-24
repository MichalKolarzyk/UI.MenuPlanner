import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconLabel from "./IconLabel";

export default {
    title: "UI/Labels",
    component: IconLabel,
} as ComponentMeta<typeof IconLabel>;

const Template: ComponentStory<typeof IconLabel> = (args) => <IconLabel {...args}>Hello</IconLabel>;
export const iconLabel = Template.bind({});
iconLabel.args = {
    
};