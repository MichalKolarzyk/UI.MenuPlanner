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

export const StepList = Template.bind({});
StepList.args = {
    title: "steps",
    items: [
        "Step1",
        "Super long step aaaaaaaaaaaaaaaa aaaaaaaaaaaa",
        "Step3",
    ]

};
