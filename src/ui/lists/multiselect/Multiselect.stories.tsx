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
        { id: 1, name: "Słodki", description: "Słodki smak opis" },
        { id: 2, name: "Kwaśny", description: "Kwaśny smak opis" },
        { id: 3, name: "Słony", description: "Słony smak opis" },
        { id: 4, name: "Słony", description: "Słony smak opis" },
        { id: 5, name: "Słony", description: "Słony smak opis" },
        { id: 6, name: "Słony", description: "Słony smak opis" },
        { id: 7, name: "Słony", description: "Słony smak opis" },
        { id: 8, name: "Słony", description: "Słony smak opis" },
    ],
    seletedKeys: [1, 4, 7, 6],
    itemKey: (item) => item.id,
    itemToString: (item) => item.name,
};
