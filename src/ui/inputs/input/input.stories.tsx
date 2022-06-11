import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FontsizeEnum } from "../../constants/Constants";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import Label from "../../labels/label/Label";
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
        <Label bold size={FontsizeEnum.medium}>
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
        <Label bold size={FontsizeEnum.medium}>
            Styles valid / invalid:
        </Label>
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
            <Label>default</Label>
            <Input {...baseArgs} style={InputStyle.default} />
            <Input {...baseArgs} style={InputStyle.default} isValid={false}/>
            <Label>transparent</Label>
            <Input {...baseArgs} style={InputStyle.transparent} />
            <Input {...baseArgs} style={InputStyle.transparent} isValid={false}/>
        </Flex>
    </Flex>
);

export const input = Template.bind({});
input.args = {
    options: ["black", "red", "white"],
};
