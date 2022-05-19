import { ComponentMeta, ComponentStory } from "@storybook/react";
import SimpleForm, { FormFieldValidationResult } from "./SimpleForm";

export default {
    title: "UI/SimpleForm",
    component: SimpleForm,
} as ComponentMeta<typeof SimpleForm>;

const Template: ComponentStory<typeof SimpleForm> = (args) => <SimpleForm {...args} />;

export const simpleForm = Template.bind({});
simpleForm.args = {
    onSubmit: (item: any) => {console.log(item)},
    item: {
        id: 123,
        firstName: "Michał",
        lastName: "Kowalski",
        age: 27,
        gender: "famale1",
    },
    fields: [
        {
            property: "firstName",
            text: "Firstname",
            type: "text",
            onValidation: (item: string) => {
                if(item.match(/\d+/g)){
                    return FormFieldValidationResult.invalidField("Firstname should not contain numbers")
                }
                if(item.includes("@")){
                    return FormFieldValidationResult.invalidField("Firstname should not contains special characters")
                }
                return FormFieldValidationResult.ValidField
            }
        },
        {
            property: "lastName",
            text: "LastName",
            onValidation: (item: string) => {
                if(item.match(/\d+/g)){
                    return FormFieldValidationResult.invalidField("Lastname should not contain numbers")
                }
                if(item.includes("@")){
                    return FormFieldValidationResult.invalidField("Lastname should not contains special characters")
                }
                return FormFieldValidationResult.ValidField
            }
        },
        {
            property: "age",
            text: "Age",
            type: "number",
            onValidation: (item: number) => {
                if(item > 150){
                    return new FormFieldValidationResult(false, "Age is too lagre")
                }
                return FormFieldValidationResult.ValidField
            }
        },
        {
            property: "gender",
            text: "Gender",
            type: "enum",
            options: [
                "male",
                "famale",
                "unknown",
            ]
        },
    ]
};
