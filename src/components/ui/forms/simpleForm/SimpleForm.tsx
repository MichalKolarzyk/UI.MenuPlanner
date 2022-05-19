import React, { useState } from "react";
import EnumInput from "../../inputs/enumInput/EnumInput";

const SimpleForm = (props: SimpleFormProps) => {
    const [item, setItem] = useState(props.item);

    const onValueUpdatedHandler = (field: FormFieldModel, newValue: any) => {
        const newItem = { ...item };
        newItem[field.property] = newValue;
        setItem(newItem);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        props.onSubmit(item);
    };

    const formFields = props.fields.map((f) => (
        <FormField field={f} value={item[f.property]} onValueUpdated={onValueUpdatedHandler} />
    ));
    return (
        <form onSubmit={submitHandler}>
            {formFields}
            <button>Submit</button>
        </form>
    );
};

const FormField = (props: FormFieldProps) => {
    const inputChangeHanler = (event: any) => {
        const newValue = event.target.value;
        const result = props.field.onValidation?.(newValue);
        if (result?.isValid === false) {
            console.log(result.errorMessage);
            return;
        }
        props.onValueUpdated(props.field, newValue);
    };
    const inputComponent = () => {
        if(props.field.type === "enum"){
            return <EnumInput onChange={inputChangeHanler} value={props.value} options={props.field.options}/>
        }
        return <input onChange={inputChangeHanler} value={props.value} type={props.field.type} />
    }
    return (
        <div>
            <span>{props.field.text}</span>
            {inputComponent()}
        </div>
    );
};

type SimpleFormProps = {
    item: any;
    fields: Array<FormFieldModel>;
    onSubmit: (item: any) => void;
};

type FormFieldProps = {
    value: any;
    field: FormFieldModel;
    onValueUpdated: (field: FormFieldModel, newValue: any) => void;
};

type FormFieldModel = {
    text: string;
    property: string;
    type?: string;
    options?: Array<string>;
    onValidation?: (item: any) => FormFieldValidationResult;
};

export class FormFieldValidationResult {
    isValid: boolean;
    errorMessage: string;

    constructor(isValid: boolean, errorMessage: string) {
        this.isValid = isValid;
        this.errorMessage = errorMessage;
    }

    static ValidField: FormFieldValidationResult = { isValid: true, errorMessage: "" };

    static invalidField = (errorMessage: string) => new FormFieldValidationResult(false, errorMessage);
}

export default SimpleForm;
