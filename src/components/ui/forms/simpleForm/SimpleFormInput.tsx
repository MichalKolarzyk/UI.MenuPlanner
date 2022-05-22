import EnumInput from "../../inputs/enumInput/EnumInput";
import classes from "./SimpleFormInput.module.css";

const SimpleFormInput = (props: FormInputProps) => {
    let inputComponent;
    if (props.type === FormInputTypeEnum.Enum) {
        inputComponent = (
            <EnumInput
                className={classes.input}
                onChange={props.onChange}
                value={props.value}
                options={props.options}
            />
        );
    } else {
        inputComponent = (
            <input className={classes.input} type={props.type} value={props.value} onChange={props.onChange} />
        );
    }

    return (
        <div className={classes.container}>
            <div>{props.label}</div>
            {inputComponent}
            <div className={classes.errorMessage}>{props.errorMessage}</div>
        </div>
    );
};

export enum FormInputTypeEnum {
    Enum = "enum",
    Date = "date",
    Email = "email",
}

type FormInputProps = {
    type?: FormInputTypeEnum | string;
    value?: any;
    onChange?: any;
    isValid?: boolean;
    errorMessage?: string;
    options?: Array<string>;
    label?: string;
};

export default SimpleFormInput;
