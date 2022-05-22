import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon, { IconImage, IconSize } from "../../../icons/Icon";
import Flex, { FlexGapSize, FlexStyle } from "../../flexes/Flex";
import LabelCard from "./LabelCard";

export default {
    title: "UI/Cards",
    component: LabelCard,
} as ComponentMeta<typeof LabelCard>;

const Template: ComponentStory<typeof LabelCard> = (args) => (
    <LabelCard {...args}>
        <Flex style={FlexStyle.row} gapSize={FlexGapSize.gapSize3}>
            <Icon size={IconSize.large} image={IconImage.edit} />
            <Icon size={IconSize.large} image={IconImage.remove} />
        </Flex>
    </LabelCard>
);
export const labelCard = Template.bind({});
labelCard.args = {
    bottomLabel: "Bottom label",
    upperLabel: "Upper text",
};
