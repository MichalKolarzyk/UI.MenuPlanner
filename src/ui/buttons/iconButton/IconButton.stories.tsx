import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import Label from "../../labels/label/Label";
import IconButton, { IconButtonSize } from "./IconButton";

export default {
    title: "UI/Buttons",
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <Flex alignItems={FlexAlignItems.alignUnset} style={FlexStyle.column}>
        <Label>Small size</Label>
        <Flex>
            <IconButton {...args} size = {IconButtonSize.small}/>
            <IconButton {...args} size = {IconButtonSize.small} image = {IconImage.add} />
        </Flex>
        <Label>Medium size</Label>
        <Flex>
            <IconButton {...args} size = {IconButtonSize.medium}/>
            <IconButton {...args} size = {IconButtonSize.medium} image = {IconImage.add} />
        </Flex>
        <Label>Large size</Label>
        <Flex>
            <IconButton {...args} size = {IconButtonSize.large}/>
            <IconButton {...args} size = {IconButtonSize.large} image = {IconImage.add} />
        </Flex>
    </Flex>
);
export const iconButton = Template.bind({});
iconButton.args = {
    text: "Edit",
};
