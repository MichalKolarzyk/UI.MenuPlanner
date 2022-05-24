import React, { useState } from "react";
import { ButtonStyle } from "../../buttons/button/Button";
import IconButton, { IconButtonSize } from "../../buttons/iconButton/IconButton";
import { ShapeEnum } from "../../constants/Constants";
import Card, { CardColors } from "../../containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import LabelFrame from "../../frames/labelFrame/LabelFrame";
import { IconImage, IconStyle } from "../../icons/Icon";
import { InputType } from "../../inputs/input/Input";
import LabelInput from "../../inputs/labelInput/LabelInput";

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
        <LabelFrame upperLabel="Create employee">
            <Card color={CardColors.grey}>
                <Flex alignItems={FlexAlignItems.alignRight} justify={FlexJustify.spaceBetween}>
                    <Flex
                        style={FlexStyle.column}
                        alignItems={FlexAlignItems.alignUnset}
                        gapSize={FlexGapSize.gapSize3}
                    >
                        <form onSubmit={submitHandler}>
                            <Flex
                                style={FlexStyle.column}
                                alignItems={FlexAlignItems.alignUnset}
                                gapSize={FlexGapSize.gapSize3}
                            >
                                <Flex
                                    style={FlexStyle.column}
                                    gapSize={FlexGapSize.gapSize1}
                                    alignItems={FlexAlignItems.alignLeft}
                                >
                                    {formFields}
                                </Flex>
                                <Flex>
                                    <IconButton
                                        shape={ShapeEnum.slightlyRounded}
                                        image={IconImage.save}
                                        style={ButtonStyle.accept}
                                        text="Submit"
                                    />
                                </Flex>
                            </Flex>
                        </form>
                    </Flex>
                    <Flex>
                        <IconButton
                            shape={ShapeEnum.slightlyRounded}
                            style={ButtonStyle.cancel}
                            image={IconImage.close}
                            text="Cancel"
                        />
                    </Flex>
                </Flex>
            </Card>
        </LabelFrame>
    );
};

const FormField = (props: FormFieldProps) => {
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const inputChangeHanler = (event: any) => {
        const newValue = event.target.value;
        const result = props.field.onValidation?.(newValue);
        setIsValid(result?.isValid ?? true);
        setErrorMessage(result?.errorMessage ?? "");
        props.onValueUpdated(props.field, newValue);
    };

    return (
        <LabelInput
            onChange={inputChangeHanler}
            value={props.value}
            options={props.field.options}
            type={props.field.type}
            label={props.field.text}
            errorMessage={errorMessage}
            isValid={isValid}
        />
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
    type?: InputType;
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
