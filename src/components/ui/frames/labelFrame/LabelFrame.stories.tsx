import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../../inputs/input/Input";
import LabelFrame from "./LabelFrame";

export default {
    title: "UI/Frames",
    component: LabelFrame,
} as ComponentMeta<typeof LabelFrame>;

const Template: ComponentStory<typeof LabelFrame> = (args) => (
    <LabelFrame {...args}>
        <Input></Input>
    </LabelFrame>
);
export const labelFrameInput = Template.bind({});
labelFrameInput.args = {
    bottomLabel: "Bottom label",
    upperLabel: "Upper text",
};
