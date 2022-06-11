import { ComponentMeta, ComponentStory } from "@storybook/react";
import LabelInput from "./LabelInput";

export default {
    title: "UI/Inputs",
    component: LabelInput,
} as ComponentMeta<typeof LabelInput>;

const Template: ComponentStory<typeof LabelInput> = (args) => <LabelInput {...args}/>;

export const labelInput = Template.bind({});
labelInput.args = {
    label: "Firstname:",
    errorMessage: "Error",
    options: [
        "black",
        "red",
        "white",
    ]
};