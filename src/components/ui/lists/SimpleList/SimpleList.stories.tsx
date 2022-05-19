import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StringList } from "./SimpleList";

export default {
    title: "UI/SimpleList",
    component: StringList,
} as ComponentMeta<typeof StringList>;

const Template: ComponentStory<typeof StringList> = (args) => <StringList {...args} />;

export const stepList = Template.bind({});
stepList.args = {
    title: "steps",
    items: ["Step1", "Super long step aaaaaaaaaaaaaaaa aaaaaaaaaaaa", "Step3"],
};

export const disabledList = Template.bind({});
disabledList.args = {
    isDisabled: true,
    title: "steps",
    items: ["Item 1", "Item 2"],
};
