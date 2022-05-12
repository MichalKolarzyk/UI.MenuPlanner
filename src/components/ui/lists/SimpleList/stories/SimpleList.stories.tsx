import { ComponentMeta, ComponentStory } from "@storybook/react";
import SimpleList from "../SimpleList";

export default {
    title: "UI/SimpleList",
    component: SimpleList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof SimpleList>;

const Template: ComponentStory<typeof SimpleList> = (args) => <SimpleList {...args} />;

export const stepList = Template.bind({});
stepList.args = {
    title: "steps",
    items: [
        "Step1",
        "Super long step aaaaaaaaaaaaaaaa aaaaaaaaaaaa",
        "Step3",
    ]
};

export const disabledList = Template.bind({});
disabledList.args = {
    isDisabled: true,
    title: "steps",
    items: [
        "Item 1",
        "Item 2",
    ]
};

