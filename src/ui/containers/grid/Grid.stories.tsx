import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card, { CardColors } from "../cards/Card";
import Grid from "./Grid";

export default {
    title: "UI/Containers",
    component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args}>
        <div></div>
        <div></div>
        <Card color={CardColors.grey} />
        <Card color={CardColors.grey} />
        <Card color={CardColors.grey} />
        <Card color={CardColors.grey} />
        <Card color={CardColors.grey} />
        <Card color={CardColors.grey} />
        <Card color={CardColors.grey} />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </Grid>
);
export const grid = Template.bind({});
grid.args = {
    cellHeight: "300px",
    cellWidth: "180px",
    columns: 7,
    rows: 5,
};
