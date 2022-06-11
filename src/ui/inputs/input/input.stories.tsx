import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import Label, { LabelSize } from "../../labels/label/Label";
import Input, { InputProps, InputStyle, InputType } from "./Input";

export default {
    title: "UI/Inputs",
    component: Input,
} as ComponentMeta<typeof Input>;

const baseArgs: InputProps = {
    options: ["black", "red", "white"],
    type: InputType.text,
};
const Template: ComponentStory<typeof Input> = (args) => (
    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
        <Label bold size={LabelSize.medium}>
            Types
        </Label>
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
            <Label>date</Label>
            <Input {...baseArgs} type={InputType.date} />
            <Label>email</Label>
            <Input {...baseArgs} type={InputType.email} />
            <Label>enum</Label>
            <Input {...baseArgs} type={InputType.enum} />
            <Label>number</Label>
            <Input {...baseArgs} type={InputType.number} />
            <Label>password</Label>
            <Input {...baseArgs} type={InputType.password} />
            <Label>text</Label>
            <Input {...baseArgs} type={InputType.text} />
            <Label>textarea</Label>
            <Input {...baseArgs} type={InputType.textarea} />
        </Flex>
        <Label bold size={LabelSize.medium}>
            Styles
        </Label>
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
            <Label>default</Label>
            <Input {...baseArgs} style={InputStyle.default} />
            <Label>transparent</Label>
            <Input {...baseArgs} style={InputStyle.transparent} />
        </Flex>
    </Flex>
);

export const input = Template.bind({});
input.args = {
    options: ["black", "red", "white"],
};
