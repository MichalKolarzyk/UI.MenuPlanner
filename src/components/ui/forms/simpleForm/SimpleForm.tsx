import React, { useState } from "react";
import { ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import { ShapeEnum } from "../../constants/Constants";
import Card, { CardColors } from "../../containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import { InputType } from "../../inputs/input/Input";
import LabelInput from "../../inputs/labelInput/LabelInput";
import Label, { LabelSize } from "../../labels/label/Label";

const SimpleForm = (props: SimpleFormProps) => {
    const [item, setItem] = useState(props.item);
    const fields = props.fields;

    const onFieldChangeHandler = (field: FormFieldModel, newValue: any) => {
        const result = field.onValidation?.(newValue) ?? FormFieldValidationResult.ValidField;
        field.isValid = result.isValid;
        field.errorMessage = result.errorMessage;
    
        const newItem = { ...item };
        newItem[field.property] = newValue;
        setItem(newItem);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        fields.map(f => onFieldChangeHandler(f, item[f.property]));
        if(!fields.some(f => f.isValid === false)){
            props.onSubmit(item);
        }
        else{
            props.onSubmitFail
        }
    };

    const formFields = fields.map((f) => (
        <LabelInput
            onChange={(event) => onFieldChangeHandler(f, event.target.value)}
            value={item[f.property]}
            image={f.image}
            options={f.options}
            type={f.type}
            label={f.text}
            errorMessage={f.errorMessage}
            isValid={f.isValid}
        />
    ));
    return (
        <Card color={CardColors.grey}>
            <Flex alignItems={FlexAlignItems.alignRight} justify={FlexJustify.spaceBetween}>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize3}>
                    <Label bold size={LabelSize.medium}>
                        {props.title}
                    </Label>
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
    );
};

type SimpleFormProps = {
    item: any;
    fields: Array<FormFieldModel>;
    title: string;
    onSubmit: (item: any) => void;
    onSubmitFail: () => void;
};

type FormFieldModel = {
    text: string;
    property: string;
    type?: InputType;
    image?: IconImage;
    options?: Array<string>;
    isValid?: boolean;
    errorMessage?: string;
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
