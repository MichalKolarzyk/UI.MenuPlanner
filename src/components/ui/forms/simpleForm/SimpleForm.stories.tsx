import { ComponentMeta, ComponentStory } from "@storybook/react";
import SimpleForm from "./SimpleForm";

export default {
    title: "UI/SimpleForm",
    component: SimpleForm,
} as ComponentMeta<typeof SimpleForm>;

const Template: ComponentStory<typeof SimpleForm> = (args) => <SimpleForm {...args} />;

export const simpleForm = Template.bind({});
simpleForm.args = {
    item: {
        firstName: "Michał",
        lastName: "Kowalski",
        age: 27,
    },
    fields: [
        {
            property: "firstName",
            text: "Firstname",
            type: "text"
        },
        {
            property: "lastName",
            text: "LastName",
        },
        {
            property: "age",
            text: "Age",
            type: "number"
        },
    ]
};
