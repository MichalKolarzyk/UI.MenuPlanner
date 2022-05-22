import React, { useState } from "react";
import Button, { ButtonShape, ButtonSize, ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import { IconImage } from "../../icons/Icon";
import SimpleFormInput from "./SimpleFormInput";

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
            <IconButton shape={ButtonShape.roundedCorners} image={IconImage.save} style={ButtonStyle.accept} text="Submit"/>
            <IconButton shape={ButtonShape.roundedCorners} image={IconImage.close} style={ButtonStyle.cancel} text="Cancel"/>
        </form>
    );
};

const FormField = (props: FormFieldProps) => {
    const [state, setState] = useState<FormFieldValidationResult>();

    const inputChangeHanler = (event: any) => {
        const newValue = event.target.value;
        const result = props.field.onValidation?.(newValue);
        setState(result);
        props.onValueUpdated(props.field, newValue);
    };

    return <SimpleFormInput
                onChange={inputChangeHanler}
                value={props.value}
                options={props.field.options}
                type={props.field.type}
                label={props.field.text}
                errorMessage={state?.errorMessage}
                isValid={state?.isValid}
            />
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
