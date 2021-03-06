import React, { useEffect, useState } from "react";
import { ButtonStyle } from "../../buttons/button/Button";
import IconButton from "../../buttons/iconButton/IconButton";
import { ColorEnum, FontsizeEnum, PaddingEnum, ShapeEnum } from "../../constants/Constants";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../containers/flexes/Flex";
import { IconImage } from "../../icons/Icon";
import { InputType } from "../../inputs/input/Input";
import LabelInput from "../../inputs/labelInput/LabelInput";
import Label from "../../labels/label/Label";

const SimpleForm = (props: SimpleFormProps) => {
    const [item, setItem] = useState(props.item);
    const fields = props.fields;

    const onFieldChangeHandler = (field: FormFieldModel, newValue: any) => {
        const result = field.onValidation?.(newValue, item) ?? FormFieldValidationResult.ValidField;
        field.isValid = result.isValid;
        field.errorMessage = result.errorMessage;

        const newItem = { ...item };
        newItem[field.property] = newValue;
        setItem(newItem);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        if (!fields) {
            return;
        }
        fields.map((f) => onFieldChangeHandler(f, item[f.property]));
        if (!fields.some((f) => f.isValid === false)) {
            props.onSubmit?.(item);
        } else {
            props.onSubmitFail?.();
        }
    };
    
    let buttonElements;
    if (props.simpleFormButtonStyle === SimpleFormButtonStyle.sumbitCancel) {
        buttonElements = (
            <Flex justify={FlexJustify.spaceBetween}>
                <IconButton
                    isLoading={props.isLoading}
                    isDisabled={props.isLoading} 
                    shape={ShapeEnum.slightlyRounded}
                    image={IconImage.save}
                    style={ButtonStyle.accept}
                    text="Submit"
                    submit
                />
                <IconButton
                    isDisabled={props.isLoading} 
                    shape={ShapeEnum.slightlyRounded}
                    onClick={props.onSecondChoiceClick}
                    style={ButtonStyle.cancel}
                    image={IconImage.close}
                    text="Cancel"
                />
            </Flex>
        );
    } else if (props.simpleFormButtonStyle === SimpleFormButtonStyle.loginSignUp) {
        buttonElements = (
            <Flex>
                <IconButton
                    isLoading={props.isLoading}
                    isDisabled={props.isLoading}            
                    shape={ShapeEnum.slightlyRounded}
                    image={IconImage.user}
                    style={ButtonStyle.accept}
                    text="Login"
                    submit
                />
                <IconButton
                    isDisabled={props.isLoading}   
                    shape={ShapeEnum.slightlyRounded}
                    onClick={props.onSecondChoiceClick}
                    style={ButtonStyle.cancel}
                    image={IconImage.save}
                    text="Sign up"
                />
            </Flex>
        );
    } else if (props.simpleFormButtonStyle === SimpleFormButtonStyle.signUpSignIn) {
        buttonElements = (
            <Flex>
                <IconButton
                    isLoading={props.isLoading}
                    isDisabled={props.isLoading}
                    shape={ShapeEnum.slightlyRounded}
                    image={IconImage.user}
                    style={ButtonStyle.default}
                    text="Sign Up"
                    submit
                />
                <IconButton
                    isDisabled={props.isLoading}
                    shape={ShapeEnum.slightlyRounded}
                    onClick={props.onSecondChoiceClick}
                    style={ButtonStyle.cancel}
                    image={IconImage.save}
                    text="Sign In"
                />
            </Flex>
        );
    }

    const formFields = fields?.map((f) => (
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
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize3}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize1}>
                <Label bold size={FontsizeEnum.medium}>
                    {props.title}
                </Label>
                {props.serverErrorMessage && (
                    <Label size={FontsizeEnum.small} color={ColorEnum.redL1}>
                        {props.serverErrorMessage}
                    </Label>
                )}
            </Flex>
            {props.createdSuccesfully && <Label size={FontsizeEnum.small} color={ColorEnum.greenL1}>Created succesfully</Label>}
            {!props.createdSuccesfully && (
                <form onSubmit={submitHandler}>
                    <Flex
                        style={FlexStyle.column}
                        alignItems={FlexAlignItems.alignUnset}
                        gapSize={FlexGapSize.gapSize3}
                    >
                        <Flex
                            style={FlexStyle.column}
                            gapSize={FlexGapSize.gapSize1}
                            alignItems={FlexAlignItems.alignUnset}
                        >
                            {formFields}
                        </Flex>
                        {buttonElements}
                    </Flex>
                </form>
            )}
        </Flex>
    );
};

type SimpleFormProps = {
    item?: any;
    fields?: Array<FormFieldModel>;
    title?: string;
    simpleFormButtonStyle?: SimpleFormButtonStyle;
    serverErrorMessage?: string;
    createdSuccesfully?: boolean;
    isLoading?: boolean;
    onSubmit?: (item: any) => void;
    onSubmitFail?: () => void;
    onSecondChoiceClick?: () => void;
};

type FormFieldModel = {
    text: string;
    property: string;
    type?: InputType;
    image?: IconImage;
    options?: Array<string>;
    isValid?: boolean;
    errorMessage?: string;
    onValidation?: (property: any, item: any) => FormFieldValidationResult;
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

export enum SimpleFormButtonStyle {
    signUpSignIn,
    loginSignUp,
    sumbitCancel,
}

export default SimpleForm;
