import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sorter from "../../../../helpers/Sorters";
import Table from "./Table";

export default {
    title: "UI/Table",
    component: Table,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const table = Template.bind({});
table.args = {
    defaultSorter: Sorter.stringSorter,
    onRowClick: (row: any) => {console.log(row)}, 
    columns: [
        {
            name:  "Id",
            property: "id",
        },
        {
            name:  "Firstname",
            property: "firstName",
        },
        {
            name: "Lastname",
            property: "lastName",
        },
        {
            name: "Phone number",
            property: "phoneNumber",
        },
        {
            name: "Age",
            property: "age",
            sorter: Sorter.numberSorter
        },
    ],
    items: [
        {
            id: 1,
            firstName: "Janusz",
            lastName: "Kowalski",
            phoneNumber: "732025652",
            age: 55,
        },
        {
            id: 12,
            firstName: "Rafał",
            lastName: "Marciński",
            age: 22,
        },
        {
            id: 3,
            firstName: "Bartosz",
            lastName: "Kwiatkowski",
            age: 16,
        },
        {
            id: 4,
            firstName: "Maksymilian",
            lastName: "Wilczyński",
            phoneNumber: "652885987",
            age: 43,
        },
        {
            id: 5,
            firstName: "Łukasz",
            lastName: "Dudziński",
            age: 6,
        },
    ],
};
