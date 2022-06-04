import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
    title: "UI/Buttons",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello</Button>;
export const button = Template.bind({});
button.args = {
    onClick: () => {console.log("click")}
};