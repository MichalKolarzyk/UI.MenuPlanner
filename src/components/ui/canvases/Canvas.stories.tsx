import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../containers/cards/card/Card";
import Flex, { FlexAlignItems } from "../containers/flexes/Flex";
import Canvas from "./Canvas";

export default {
    title: "UI/Canvas",
    component: Canvas,
} as ComponentMeta<typeof Canvas>;

const Template: ComponentStory<typeof Canvas> = (args) => (
    <Flex>
        <Canvas {...args}><Flex alignItems={FlexAlignItems.alignStretch}><Card/></Flex></Canvas>
        <Canvas {...args}>Hello</Canvas>
        <Canvas {...args}>Hello</Canvas>
    </Flex>
);
export const canvas = Template.bind({});
canvas.args = {
    onClick: () => {
        console.log("click");
    },
};
