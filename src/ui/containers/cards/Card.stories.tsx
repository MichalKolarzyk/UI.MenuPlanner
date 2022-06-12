import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";

export default {
    title: "UI/Containers",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;
export const card = Template.bind({});
card.args = {

};
