import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./IconButton";

export default {
    title: "UI/Buttons",
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;
export const iconButton = Template.bind({});
iconButton.args = {
    text: "Edit",
};