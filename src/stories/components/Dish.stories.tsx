import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dish from "../../components/Dish";
import Steps from "../../components/Steps";

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
        name: "Chips & Chips",
        discription: "The best for english food gourmets of English cuisine.",
        recipe: {
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

export const EmptyDish = Template.bind({});
EmptyDish.args = {
    dish: {
        name: "Empty dish",
        discription: "Sory, this dish is not ready. Lists are not initialized.",
        recipe: {},
    },
};

export const EmptyDish2 = Template.bind({});
EmptyDish2.args = {
    dish: {
        name: "Empty dish 2",
        discription: "Sory, this dish is not ready. Lists are empty.",
        recipe: {
            ingreadients: [],
            steps: [],
        },
    },
};
