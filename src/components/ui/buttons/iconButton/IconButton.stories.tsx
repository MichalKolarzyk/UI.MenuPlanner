import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconImage, IconStyle } from "../../icons/Icon";
import { ButtonStyle } from "../button/Button";
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

const TemplateWtihCart: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;
export const transparentButton = TemplateWtihCart.bind({});
transparentButton.args = {
    text: "Edit",
    style: ButtonStyle.transparent,
    image: IconImage.add,
};
