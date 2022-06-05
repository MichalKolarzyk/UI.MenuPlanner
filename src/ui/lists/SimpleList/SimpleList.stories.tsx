import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StringList } from "./SimpleList";

export default {
    title: "UI/Lists/SimpleList",
    component: StringList,
} as ComponentMeta<typeof StringList>;

const Template: ComponentStory<typeof StringList> = (args) => <StringList {...args} />;

export const stepList = Template.bind({});
stepList.args = {
    title: "steps",
    items: ["Step1", "Step2", "Step3"],
};