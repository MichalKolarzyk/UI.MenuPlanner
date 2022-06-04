import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconImage } from "../../icons/Icon";
import { InputType } from "../../inputs/input/Input";
import SimpleForm, { FormFieldValidationResult } from "./SimpleForm";

export default {
    title: "UI/SimpleForm",
    component: SimpleForm,
} as ComponentMeta<typeof SimpleForm>;

const Template: ComponentStory<typeof SimpleForm> = (args) => <SimpleForm {...args} />;

export const simpleForm = Template.bind({});
simpleForm.args = {
    title: "Create Employee",
    onSubmit: (item: any) => {console.log(item)},
    item: {
        id: 123,
        firstName: "Michał",
        lastName: "",
        workStarted: "2022-10-21",
        email: "michalkowalski@gmail.com",
        email2: "",
        age: 27,
        gender: "famale",
    },
    fields: [
        {
            property: "firstName",
            text: "Firstname",
            type: InputType.text,
            image: IconImage.user,
            onValidation: (item: string) => {
                if(item.length < 3){
                    return FormFieldValidationResult.invalidField("Firstname should have at list 3 characters")
                }
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
                if(item.length < 3){
                    return FormFieldValidationResult.invalidField("Lastname should have at list 3 characters")
                }
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
            property: "workStarted",
            text: "Work started",
            type: InputType.date
        },
        {
            property: "email",
            text: "Email",
            image: IconImage.envelope,
            onValidation: (item: string) => {
                if(!item.includes("@")){
                    return FormFieldValidationResult.invalidField("Email should contain @ character")
                }
                if(item.length < 6){
                    return FormFieldValidationResult.invalidField("Email address is too short")
                }
                return FormFieldValidationResult.ValidField
            }
        },
        {
            property: "email2",
            text: "Email 2",
            image: IconImage.envelope,
            onValidation: (item: string) => {
                if(!item.includes("@")){
                    return FormFieldValidationResult.invalidField("Email should contain @ character")
                }
                if(item.length < 6){
                    return FormFieldValidationResult.invalidField("Email address is too short")
                }
                return FormFieldValidationResult.ValidField
            }
        },
        {
            property: "age",
            text: "Age",
            type: InputType.number,
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
            type: InputType.enum,
            options: [
                "male",
                "famale",
                "unknown",
                "robot",
            ]
        },
    ]
};
