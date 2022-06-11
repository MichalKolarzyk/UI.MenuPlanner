import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FontsizeEnum, ShapeEnum } from "../../constants/Constants";
import Flex, { FlexAlignItems, FlexStyle } from "../../containers/flexes/Flex";
import Label, { LabelSize } from "../../labels/label/Label";
import Button, { ButtonProps, ButtonStyle } from "./Button";

export default {
    title: "UI/Buttons",
    component: Button,
} as ComponentMeta<typeof Button>;

const baseArgs: ButtonProps = {};

const Template: ComponentStory<typeof Button> = (args) => (
    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
        <Label bold size={LabelSize.large}>
            Sizes
        </Label>
        <Flex>
            <Button {...baseArgs} size={FontsizeEnum.small}>
                small
            </Button>
            <Button {...baseArgs} size={FontsizeEnum.medium}>
                medium
            </Button>
            <Button {...baseArgs} size={FontsizeEnum.large}>
                large
            </Button>
        </Flex>
        <Label bold size={LabelSize.large}>
            Styles
        </Label>
        <Flex>
            <Button {...baseArgs} style={ButtonStyle.accept}>
                accept
            </Button>
            <Button {...baseArgs} style={ButtonStyle.cancel}>
                cancel
            </Button>
            <Button {...baseArgs} style={ButtonStyle.default}>
                default
            </Button>
            <Button {...baseArgs} style={ButtonStyle.grey}>
                grey
            </Button>
            <Button {...baseArgs} style={ButtonStyle.transparent}>
                transparent
            </Button>
            <Button {...baseArgs} style={ButtonStyle.transparentWhite}>
                transparentWhite
            </Button>
        </Flex>
        <Label bold size={LabelSize.large}>
            Shapes
        </Label>
        <Flex>
            <Button {...baseArgs} shape={ShapeEnum.sharp}>
                sharp
            </Button>
            <Button {...baseArgs} shape={ShapeEnum.slightlyRounded}>
                slightlyRounded
            </Button>
            <Button {...baseArgs} shape={ShapeEnum.rounded}>
                rounded
            </Button>
            <Button {...baseArgs} shape={ShapeEnum.elipse}>
                elipse
            </Button>
        </Flex>
    </Flex>
);
export const button = Template.bind({});
button.args = baseArgs;
