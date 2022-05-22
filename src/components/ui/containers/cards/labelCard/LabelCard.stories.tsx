import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon, { IconImage, IconSize } from "../../../icons/Icon";
import Input from "../../../inputs/input/Input";
import Flex, { FlexGapSize, FlexStyle } from "../../flexes/Flex";
import LabelCard from "./LabelCard";

export default {
    title: "UI/Cards",
    component: LabelCard,
} as ComponentMeta<typeof LabelCard>;

const Template: ComponentStory<typeof LabelCard> = (args) => (
    <LabelCard {...args}>
        <Input></Input>
    </LabelCard>
);
export const labelCard = Template.bind({});
labelCard.args = {
    bottomLabel: "Bottom label",
    upperLabel: "Upper text",
};
