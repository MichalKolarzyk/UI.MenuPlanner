import { ComponentMeta, ComponentStory } from "@storybook/react";
import Multiselect from "./Multiselect";

export default {
    title: "UI/Lists/Multiselect",
    component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = (args) => <Multiselect {...args} />;
export const multiselect = Template.bind({});
multiselect.args = {
    title: "Tags",
    items: [
        { name: "Słodki", description: "Słodki smak opis" },
        { name: "Kwaśny", description: "Kwaśny smak opis" },
        { name: "Słony", description: "Słony smak opis" },
        { name: "Słony", description: "Słony smak opis" },
        { name: "Słony", description: "Słony smak opis" },
        { name: "Słony", description: "Słony smak opis" },
        { name: "Słony", description: "Słony smak opis" },
        { name: "Słony", description: "Słony smak opis" },
    ],
    selectedIndexes: [1, 4, 7, 6],
    itemToString: (item) => item.name,
};
