import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card, { CardColors } from "../containers/cards/card/Card";
import Flex from "../containers/flexes/Flex";
import Test from "./Test";


export default {
    title: "UI/test",
    component: Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => (
    <Flex>
        <Test {...args}>Test1</Test>
        <Test {...args}>Test2</Test>
        <Flex>
            <Card color={CardColors.green}>1</Card>
            <Card color={CardColors.grey}>2</Card>
            <Card color={CardColors.white}>3</Card>
        </Flex>
    </Flex>
);
export const test1 = Template.bind({});
test1.args = {

};
