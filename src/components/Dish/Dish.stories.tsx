import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dish from "./Dish";

export default {
    title: "Components/Dish",
    component: Dish,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Dish>;

const Template: ComponentStory<typeof Dish> = (args) => <Dish {...args} />;

export const ChipsAndChips = Template.bind({});
ChipsAndChips.args = {
    dish: {
        recipe: {
            title: "Chips & Chips",
            description: "The best for english food gourmets of English cuisine.",
            ingreadients: [
                {
                    amount: 1,
                    name: "Fish",
                },
                {
                    amount: 30,
                    name: "Fries",
                },
            ],
            steps: ["step 1", "step 2", "step 3"],
        },
    },
};